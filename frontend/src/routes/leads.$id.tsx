import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { AppLayout } from "@/components/layout/app-layout";
import { useLeads } from "@/lib/leads-store";
import { ArrowLeft, Mail, Phone, Building2, Calendar, Trash2, Send, MessageSquarePlus, Pencil, X, CheckCircle2, RefreshCw, FileText, Plus, Loader2 } from "lucide-react";
import { StatusBadge } from "@/components/status-badge";
import { formatDate, formatDateTime, timeAgo, formatCurrency, daysFromNow } from "@/lib/format";
import { useState } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

type LeadStatus = "New" | "Contacted" | "Qualified" | "Converted" | "Lost";

export const Route = createFileRoute("/leads/$id")({
  head: ({ params }) => ({
    meta: [
      { title: `Lead details — LeadFlow CRM` },
      { name: "description", content: `Lead profile for ${params.id}` },
    ],
  }),
  component: LeadDetail,
});

function LeadDetail() {
  const { id } = Route.useParams();
  const { leads, loading, addNote, deleteNote, updateLeadStatus, deleteLead, completeFollowUp } = useLeads();
  const navigate = useNavigate();
  const lead = leads.find((l) => l._id === id);
  const [noteText, setNoteText] = useState("");

  if (loading && !lead) {
    return (
      <AppLayout>
        <div className="flex h-[50vh] flex-col items-center justify-center space-y-4">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
          <p className="text-muted-foreground">Loading lead details...</p>
        </div>
      </AppLayout>
    );
  }

  if (!lead) {
    return (
      <AppLayout>
        <div className="rounded-2xl border border-border bg-card p-12 text-center">
          <h2 className="text-lg font-semibold">Lead not found</h2>
          <Link to="/leads" className="mt-3 inline-block text-sm font-medium text-primary hover:underline">← Back to leads</Link>
        </div>
      </AppLayout>
    );
  }

  const days = daysFromNow(lead.followUpDate);
  const notes = Array.isArray(lead.notes)
    ? lead.notes
    : lead.notes
      ? [{ _id: "lead-notes", text: lead.notes, createdAt: lead.createdAt }]
      : [];

  const handleAddNote = async () => {
    if (!noteText.trim()) return;
    try {
      await addNote(lead._id, noteText.trim());
      setNoteText("");
      toast.success("Note added");
    } catch (error) {
      toast.error("Failed to add note");
    }
  };

  return (
    <AppLayout>
      <Link to="/leads" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground">
        <ArrowLeft className="h-4 w-4" /> Back to leads
      </Link>

      {/* Header card */}
      <div className="mt-4 overflow-hidden rounded-2xl border border-border bg-card shadow-soft">
        <div className="h-24 gradient-hero" />
        <div className="flex flex-col gap-5 p-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="-mt-16 flex items-end gap-4">
            <div className="flex h-24 w-24 items-center justify-center rounded-2xl border-4 border-card text-2xl font-bold text-white shadow-elevated bg-primary">
              {lead.name.split(" ").map((n: string) => n[0]).join("").slice(0, 2)}
            </div>
            <div className="pb-1">
              <h1 className="text-2xl font-bold tracking-tight">{lead.name}</h1>
              <div className="mt-1 flex items-center gap-2 text-sm text-muted-foreground">
                <Building2 className="h-3.5 w-3.5" /> {lead.company}
              </div>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <Select value={lead.status} onValueChange={(v) => { updateLeadStatus(lead._id, v as LeadStatus); toast.success(`Status updated to ${v}`); }}>
              <SelectTrigger className="h-10 w-[160px] rounded-xl"><SelectValue /></SelectTrigger>
              <SelectContent>
                {(["New", "Contacted", "Qualified", "Converted", "Lost"] as LeadStatus[]).map((s) => <SelectItem key={s} value={s}>{s}</SelectItem>)}
              </SelectContent>
            </Select>
            <button onClick={async () => { if (confirm("Delete this lead?")) { await deleteLead(lead._id); toast.success("Lead deleted"); navigate({ to: "/leads" }); } }} className="inline-flex items-center gap-1.5 rounded-xl border border-destructive/30 px-3 py-2 text-sm font-medium text-destructive hover:bg-destructive/10">
              <Trash2 className="h-4 w-4" /> Delete
            </button>
          </div>
        </div>
      </div>

      <div className="mt-5 grid gap-5 lg:grid-cols-3">
        {/* Left: info */}
        <div className="space-y-5">
          <div className="rounded-2xl border border-border bg-card p-5 shadow-soft">
            <h3 className="text-sm font-semibold">Contact Information</h3>
            <div className="mt-4 space-y-3">
              <InfoRow icon={Mail} label="Email" value={lead.email} />
              <InfoRow icon={Phone} label="Phone" value={lead.phone} />
              <InfoRow icon={Building2} label="Company" value={lead.company} />
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-card p-5 shadow-soft">
            <h3 className="text-sm font-semibold">Lead Details</h3>
            <div className="mt-4 space-y-3 text-sm">
              <div className="flex justify-between"><span className="text-muted-foreground">Source</span><span className="font-medium">{lead.source}</span></div>
              <div className="flex justify-between"><span className="text-muted-foreground">Status</span><StatusBadge status={lead.status} /></div>
              <div className="flex justify-between"><span className="text-muted-foreground">Deal value</span><span className="font-semibold text-success">{formatCurrency(lead.value)}</span></div>
              <div className="flex justify-between"><span className="text-muted-foreground">Created</span><span className="font-medium">{formatDate(lead.createdAt)}</span></div>
            </div>
          </div>

          <div className={cn("rounded-2xl border p-5 shadow-soft", days < 0 ? "border-destructive/30 bg-destructive/5" : days === 0 ? "border-warning/30 bg-warning/5" : "border-border bg-card")}>
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-semibold">Next Follow-up</h3>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </div>
            <div className="mt-2 text-xl font-bold">{formatDate(lead.followUpDate)}</div>
            <div className="text-xs text-muted-foreground">{days < 0 ? `${Math.abs(days)} day(s) overdue` : days === 0 ? "Due today" : `In ${days} day(s)`}</div>
            <button onClick={() => { completeFollowUp(lead._id); toast.success("Follow-up completed"); }} className="mt-3 inline-flex w-full items-center justify-center gap-1.5 rounded-xl gradient-primary py-2 text-sm font-semibold text-primary-foreground">
              <CheckCircle2 className="h-4 w-4" /> Mark as completed
            </button>
          </div>
        </div>

        {/* Middle/Right: notes + timeline */}
        <div className="space-y-5 lg:col-span-2">
          <div className="rounded-2xl border border-border bg-card p-5 shadow-soft">
            <h3 className="text-sm font-semibold">Notes</h3>
            <div className="mt-3 flex gap-2">
              <input
                value={noteText}
                onChange={(e) => setNoteText(e.target.value)}
                onKeyDown={(e) => { if (e.key === "Enter") handleAddNote(); }}
                placeholder="Add a quick note..."
                className="h-10 flex-1 rounded-xl border border-input bg-background px-3 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
              <button onClick={handleAddNote} className="inline-flex items-center gap-1.5 rounded-xl gradient-primary px-4 text-sm font-medium text-primary-foreground">
                <Send className="h-4 w-4" />
              </button>
            </div>
            <div className="mt-4 space-y-3">
              {notes.length === 0 ? (
                <div className="rounded-xl border border-dashed border-border p-6 text-center text-sm text-muted-foreground">
                  <MessageSquarePlus className="mx-auto mb-2 h-6 w-6 opacity-50" /> No notes yet
                </div>
              ) : (
                notes.map((n: any) => (
                  <div key={n._id} className="group flex gap-3 rounded-xl border border-border bg-muted/30 p-3">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-warning/10 text-warning">
                      <FileText className="h-4 w-4" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm">{n.text}</p>
                      <div className="mt-1 text-xs text-muted-foreground">{timeAgo(n.createdAt)}</div>
                    </div>
                    {n._id !== "lead-notes" && (
                      <button onClick={() => { deleteNote(lead._id, n._id); }} className="opacity-0 transition-opacity group-hover:opacity-100">
                        <X className="h-4 w-4 text-muted-foreground hover:text-destructive" />
                      </button>
                    )}
                  </div>
                ))
              )}
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-card p-5 shadow-soft">
            <h3 className="text-sm font-semibold">Activity Timeline</h3>
            <div className="mt-4 space-y-4">
              {(!lead.activities || lead.activities.length === 0) ? (
                <div className="text-center py-6 text-sm text-muted-foreground">No recent activity</div>
              ) : (
                lead.activities.map((a: any, i: number) => {
                  const Icon = a.type === "created" ? Plus : a.type === "status_changed" ? RefreshCw : a.type === "note_added" ? MessageSquarePlus : a.type === "followup_completed" ? CheckCircle2 : Pencil;
                  return (
                    <div key={a._id || i} className="flex gap-3">
                      <div className="flex flex-col items-center">
                        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-accent text-accent-foreground">
                          <Icon className="h-4 w-4" />
                        </div>
                        {i < lead.activities.length - 1 && <div className="mt-1 w-px flex-1 bg-border" />}
                      </div>
                      <div className="flex-1 pb-4">
                        <div className="text-sm font-medium">{a.message}</div>
                        <div className="text-xs text-muted-foreground">{formatDateTime(a.at)}</div>
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}

function InfoRow({ icon: Icon, label, value }: { icon: any; label: string; value: string }) {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-muted text-muted-foreground"><Icon className="h-4 w-4" /></div>
      <div className="min-w-0">
        <div className="text-xs text-muted-foreground">{label}</div>
        <div className="truncate text-sm font-medium">{value}</div>
      </div>
    </div>
  );
}


 
