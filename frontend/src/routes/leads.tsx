import { createFileRoute, Link } from "@tanstack/react-router";
import { AppLayout } from "@/components/layout/app-layout";
import { type Lead, useLeads } from "@/lib/leads-store";
import { useMemo, useState } from "react";
import { Search, Filter, Download, Plus, Eye, Pencil, Trash2, ChevronDown, ChevronLeft, ChevronRight, Inbox, Loader2 } from "lucide-react";
import { StatusBadge } from "@/components/status-badge";
import { AddLeadDialog } from "@/components/add-lead-dialog";
import { EditLeadDialog } from "@/components/edit-lead-dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { formatCurrency, formatDate } from "@/lib/format";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/leads")({
  head: () => ({
    meta: [
      { title: "Leads — LeadFlow CRM" },
      { name: "description", content: "Search, filter, and manage all your leads in one place." },
    ],
  }),
  component: LeadsPage,
});

const PAGE_SIZE = 10;

function LeadsPage() {
  const { leads, loading, deleteLead } = useLeads();
  const [q, setQ] = useState("");
  const [status, setStatus] = useState("all");
  const [company, setCompany] = useState("all");
  const [sort, setSort] = useState<"name" | "created" | "followup" | "value">("created");
  const [page, setPage] = useState(1);
  const [addOpen, setAddOpen] = useState(false);
  const [editingLead, setEditingLead] = useState<Lead | null>(null);

  const companies = useMemo(() => Array.from(new Set(leads.map((l) => l.company))).filter(Boolean).sort(), [leads]);

  const filtered = useMemo(() => {
    let r = leads;
    if (q) {
      const t = q.toLowerCase();
      r = r.filter((l) => l.name.toLowerCase().includes(t) || l.email.toLowerCase().includes(t) || (l.company && l.company.toLowerCase().includes(t)));
    }
    if (status !== "all") r = r.filter((l) => l.status === status);
    if (company !== "all") r = r.filter((l) => l.company === company);
    r = [...r].sort((a, b) => {
      if (sort === "name") return a.name.localeCompare(b.name);
      if (sort === "followup") return +new Date(a.followUpDate || 0) - +new Date(b.followUpDate || 0);
      if (sort === "value") return b.value - a.value;
      return +new Date(b.createdAt) - +new Date(a.createdAt);
    });
    return r;
  }, [leads, q, status, company, sort]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const pageRows = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  function exportCSV() {
    const headers = ["Name", "Email", "Phone", "Company", "Source", "Status", "Deal Value", "Follow-up", "Created"];
    const rows = filtered.map((l) => [l.name, l.email, l.phone, l.company, l.source, l.status, l.value, formatDate(l.followUpDate), formatDate(l.createdAt)]);
    const csv = [headers, ...rows].map((r) => r.map((c) => `"${String(c).replace(/"/g, '""')}"`).join(",")).join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url; a.download = "leads.csv"; a.click();
    URL.revokeObjectURL(url);
    toast.success("CSV exported");
  }

  if (loading && leads.length === 0) {
    return (
      <AppLayout>
        <div className="flex h-[50vh] flex-col items-center justify-center space-y-4">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
          <p className="text-muted-foreground">Loading leads...</p>
        </div>
      </AppLayout>
    );
  }

  return (
    <AppLayout>
      <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Leads</h1>
          <p className="mt-1 text-sm text-muted-foreground">{filtered.length} of {leads.length} leads</p>
        </div>
        <div className="flex gap-2">
          <button onClick={exportCSV} className="inline-flex items-center gap-2 rounded-xl border border-input bg-card px-4 py-2.5 text-sm font-medium shadow-sm hover:bg-muted">
            <Download className="h-4 w-4" /> Export CSV
          </button>
          <button onClick={() => setAddOpen(true)} className="inline-flex items-center gap-2 rounded-xl gradient-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground shadow-glow hover:scale-[1.02] transition-transform">
            <Plus className="h-4 w-4" /> Add Lead
          </button>
        </div>
      </div>

      <div className="mt-6 rounded-2xl border border-border bg-card shadow-soft">
        <div className="flex flex-col gap-3 border-b border-border p-4 sm:flex-row sm:items-center">
          <div className="relative flex-1">
            <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="search"
              value={q}
              onChange={(e) => { setQ(e.target.value); setPage(1); }}
              placeholder="Search by name, email, or company..."
              className="h-10 w-full rounded-xl border border-input bg-background pl-10 pr-4 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            <Select value={status} onValueChange={(v) => { setStatus(v); setPage(1); }}>
              <SelectTrigger className="h-10 w-[140px] rounded-xl"><Filter className="mr-1.5 h-3.5 w-3.5" /><SelectValue placeholder="Status" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All statuses</SelectItem>
                {["New", "Contacted", "Qualified", "Converted", "Lost"].map((s) => <SelectItem key={s} value={s}>{s}</SelectItem>)}
              </SelectContent>
            </Select>
            <Select value={company} onValueChange={(v) => { setCompany(v); setPage(1); }}>
              <SelectTrigger className="h-10 w-[160px] rounded-xl"><SelectValue placeholder="Company" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All companies</SelectItem>
                {companies.map((c) => <SelectItem key={c} value={c}>{c}</SelectItem>)}
              </SelectContent>
            </Select>
            <Select value={sort} onValueChange={(v) => setSort(v as any)}>
              <SelectTrigger className="h-10 w-[150px] rounded-xl"><SelectValue /></SelectTrigger>
              <SelectContent>
                <SelectItem value="created">Newest first</SelectItem>
                <SelectItem value="name">Name (A–Z)</SelectItem>
                <SelectItem value="followup">Follow-up date</SelectItem>
                <SelectItem value="value">Deal value</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Desktop table */}
        <div className="hidden overflow-x-auto md:block">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border bg-muted/30 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                <th className="px-5 py-3">Name</th>
                <th className="px-5 py-3">Company</th>
                <th className="px-5 py-3">Contact</th>
                <th className="px-5 py-3">Source</th>
                <th className="px-5 py-3">Status</th>
                <th className="px-5 py-3">Value</th>
                <th className="px-5 py-3">Follow-up</th>
                <th className="px-5 py-3">Created</th>
                <th className="px-5 py-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {pageRows.map((l: any) => (
                <tr key={l._id} className="border-b border-border last:border-0 transition-colors hover:bg-muted/40">
                  <td className="px-5 py-3.5">
                    <Link to="/leads/$id" params={{ id: l._id }} className="flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-full text-xs font-semibold text-white bg-primary">
                        {l.name.split(" ").map((n: string) => n[0]).join("").slice(0, 2)}
                      </div>
                      <div>
                        <div className="text-sm font-medium">{l.name}</div>
                        <div className="text-xs text-muted-foreground">{l.email}</div>
                      </div>
                    </Link>
                  </td>
                  <td className="px-5 py-3.5 text-sm">{l.company}</td>
                  <td className="px-5 py-3.5 text-sm text-muted-foreground">{l.phone}</td>
                  <td className="px-5 py-3.5 text-sm"><span className="rounded-md bg-muted px-2 py-0.5 text-xs font-medium">{l.source}</span></td>
                  <td className="px-5 py-3.5"><StatusBadge status={l.status} /></td>
                  <td className="px-5 py-3.5 text-sm font-semibold text-success">{formatCurrency(l.value)}</td>
                  <td className="px-5 py-3.5 text-sm">{formatDate(l.followUpDate)}</td>
                  <td className="px-5 py-3.5 text-sm text-muted-foreground">{formatDate(l.createdAt)}</td>
                  <td className="px-5 py-3.5">
                    <div className="flex justify-end gap-1">
                      <Link to="/leads/$id" params={{ id: l._id }} className="rounded-lg p-1.5 text-muted-foreground hover:bg-muted hover:text-foreground" title="View"><Eye className="h-4 w-4" /></Link>
                      <button onClick={() => setEditingLead(l)} className="rounded-lg p-1.5 text-muted-foreground hover:bg-muted hover:text-foreground" title="Edit"><Pencil className="h-4 w-4" /></button>
                      <button onClick={() => deleteLead(l._id)} className="rounded-lg p-1.5 text-muted-foreground hover:bg-destructive/10 hover:text-destructive" title="Delete"><Trash2 className="h-4 w-4" /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile cards */}
        <div className="space-y-3 p-4 md:hidden">
          {pageRows.map((l: any) => (
            <div key={l._id} className="rounded-xl border border-border p-4">
              <div className="flex items-center gap-3">
                <Link to="/leads/$id" params={{ id: l._id }} className="flex min-w-0 flex-1 items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full text-sm font-semibold text-white bg-primary">
                    {l.name.split(" ").map((n: string) => n[0]).join("").slice(0, 2)}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="truncate text-sm font-semibold">{l.name}</div>
                    <div className="truncate text-xs text-muted-foreground">{l.company}</div>
                  </div>
                </Link>
                <StatusBadge status={l.status} />
                <button onClick={() => setEditingLead(l)} className="rounded-lg p-1.5 text-muted-foreground hover:bg-muted hover:text-foreground" title="Edit">
                  <Pencil className="h-4 w-4" />
                </button>
              </div>
              <div className="mt-3 grid grid-cols-2 gap-2 text-xs text-muted-foreground">
                <div className="truncate">{l.email}</div>
                <div className="text-right">Follow up {formatDate(l.followUpDate)}</div>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="flex flex-col items-center justify-center px-6 py-16 text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-muted">
              <Inbox className="h-8 w-8 text-muted-foreground" />
            </div>
            <h3 className="mt-4 text-base font-semibold">No leads match your filters</h3>
            <p className="mt-1 text-sm text-muted-foreground">Try adjusting your search or filters.</p>
            <button onClick={() => { setQ(""); setStatus("all"); setCompany("all"); }} className="mt-4 text-sm font-medium text-primary hover:underline">Clear filters</button>
          </div>
        )}

        {filtered.length > 0 && (
          <div className="flex flex-col items-center justify-between gap-3 border-t border-border p-4 sm:flex-row">
            <div className="text-xs text-muted-foreground">
              Showing <strong>{(page - 1) * PAGE_SIZE + 1}</strong>–<strong>{Math.min(page * PAGE_SIZE, filtered.length)}</strong> of <strong>{filtered.length}</strong>
            </div>
            <div className="flex items-center gap-1">
              <button disabled={page === 1} onClick={() => setPage((p) => Math.max(1, p - 1))} className="rounded-lg border border-input p-1.5 disabled:opacity-40">
                <ChevronLeft className="h-4 w-4" />
              </button>
              {Array.from({ length: totalPages }).slice(0, 5).map((_, i) => {
                const p = i + 1;
                return (
                  <button key={p} onClick={() => setPage(p)} className={cn("min-w-8 rounded-lg px-2 py-1 text-xs font-medium", page === p ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-muted")}>{p}</button>
                );
              })}
              <button disabled={page === totalPages} onClick={() => setPage((p) => Math.min(totalPages, p + 1))} className="rounded-lg border border-input p-1.5 disabled:opacity-40">
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        )}
      </div>

      <AddLeadDialog open={addOpen} onOpenChange={setAddOpen} />
      <EditLeadDialog lead={editingLead} open={Boolean(editingLead)} onOpenChange={(open) => { if (!open) setEditingLead(null); }} />
    </AppLayout>
  );
}

