import { createFileRoute } from "@tanstack/react-router";
import { AppLayout } from "@/components/layout/app-layout";
import { useLeads } from "@/lib/leads-store";
import { useMemo, useState, type DragEvent } from "react";
import { Mail, Phone, Calendar, Plus, GripVertical, Loader2 } from "lucide-react";
import { formatDate, formatCurrency } from "@/lib/format";
import { AddLeadDialog } from "@/components/add-lead-dialog";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

type LeadStatus = "New" | "Contacted" | "Qualified" | "Converted" | "Lost";

export const Route = createFileRoute("/kanban")({
  head: () => ({
    meta: [
      { title: "Kanban — LeadFlow CRM" },
      { name: "description", content: "Drag and drop leads through your pipeline stages." },
    ],
  }),
  component: KanbanPage,
});

const columns: { key: LeadStatus; color: string; ring: string }[] = [
  { key: "New", color: "bg-info", ring: "ring-info/40" },
  { key: "Contacted", color: "bg-warning", ring: "ring-warning/40" },
  { key: "Qualified", color: "bg-primary", ring: "ring-primary/40" },
  { key: "Converted", color: "bg-success", ring: "ring-success/40" },
  { key: "Lost", color: "bg-destructive", ring: "ring-destructive/40" },
];

function KanbanPage() {
  const { leads, loading, updateLeadStatus } = useLeads();
  const [draggingId, setDraggingId] = useState<string | null>(null);
  const [overCol, setOverCol] = useState<LeadStatus | null>(null);
  const [addOpen, setAddOpen] = useState(false);

  const grouped = useMemo(() => {
    const g: Record<LeadStatus, any[]> = { New: [], Contacted: [], Qualified: [], Converted: [], Lost: [] };
    leads.forEach((l) => {
      if (g[l.status as LeadStatus]) {
        g[l.status as LeadStatus].push(l);
      }
    });
    return g;
  }, [leads]);

  async function onDrop(e: DragEvent, status: LeadStatus) {
    e.preventDefault();
    if (draggingId) {
      const lead = leads.find((l) => l._id === draggingId);
      if (lead && lead.status !== status) {
        try {
          await updateLeadStatus(draggingId, status);
          toast.success(`Moved to ${status}`);
        } catch (error) {
          toast.error("Failed to update status");
        }
      }
    }
    setDraggingId(null);
    setOverCol(null);
  }

  if (loading && leads.length === 0) {
    return (
      <AppLayout>
        <div className="flex h-[50vh] flex-col items-center justify-center space-y-4">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
          <p className="text-muted-foreground">Loading board...</p>
        </div>
      </AppLayout>
    );
  }

  return (
    <AppLayout>
      <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Pipeline Board</h1>
          <p className="mt-1 text-sm text-muted-foreground">Drag leads between columns to update their status.</p>
        </div>
        <button onClick={() => setAddOpen(true)} className="inline-flex items-center gap-2 self-start rounded-xl gradient-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground shadow-glow hover:scale-[1.02] transition-transform">
          <Plus className="h-4 w-4" /> Add Lead
        </button>
      </div>

      <div className="mt-6 grid auto-rows-min gap-4 lg:grid-cols-5">
        {columns.map((col) => {
          const items = grouped[col.key];
          const total = items.reduce((s, l) => s + (l.value || 0), 0);
          const isOver = overCol === col.key;
          return (
            <div
              key={col.key}
              onDragOver={(e) => { e.preventDefault(); setOverCol(col.key); }}
              onDragLeave={() => setOverCol((c) => (c === col.key ? null : c))}
              onDrop={(e) => onDrop(e, col.key)}
              className={cn(
                "flex min-h-[320px] flex-col rounded-2xl border border-border bg-muted/30 p-3 transition-all",
                isOver && "bg-accent ring-2 " + col.ring,
              )}
            >
              <div className="mb-3 flex items-center justify-between px-1">
                <div className="flex items-center gap-2">
                  <span className={cn("h-2.5 w-2.5 rounded-full", col.color)} />
                  <h3 className="text-sm font-semibold">{col.key}</h3>
                  <span className="rounded-md bg-card px-2 py-0.5 text-xs font-medium text-muted-foreground">{items.length}</span>
                </div>
                <span className="text-[11px] font-medium text-muted-foreground">{formatCurrency(total)}</span>
              </div>

              <div className="flex-1 space-y-2 overflow-y-auto pr-1">
                {items.map((l) => (
                  <article
                    key={l._id}
                    draggable
                    onDragStart={() => setDraggingId(l._id)}
                    onDragEnd={() => { setDraggingId(null); setOverCol(null); }}
                    className={cn(
                      "group cursor-grab rounded-xl border border-border bg-card p-3 shadow-sm transition-all hover:shadow-md active:cursor-grabbing",
                      draggingId === l._id && "opacity-50 rotate-2 scale-95",
                    )}
                  >
                    <div className="flex items-start gap-2">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-[11px] font-semibold text-white bg-primary">
                        {l.name.split(" ").map((n: string) => n[0]).join("").slice(0, 2)}
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="truncate text-sm font-semibold">{l.name}</div>
                        <div className="truncate text-xs text-muted-foreground">{l.company}</div>
                      </div>
                      <GripVertical className="h-4 w-4 text-muted-foreground/40 opacity-0 transition-opacity group-hover:opacity-100" />
                    </div>
                    <div className="mt-2.5 space-y-1 text-xs text-muted-foreground">
                      <div className="flex items-center gap-1.5"><Mail className="h-3 w-3" /><span className="truncate">{l.email}</span></div>
                      <div className="flex items-center gap-1.5"><Phone className="h-3 w-3" /><span>{l.phone}</span></div>
                      <div className="flex items-center gap-1.5"><Calendar className="h-3 w-3" /><span>{formatDate(l.followUpDate)}</span></div>
                    </div>
                    <div className="mt-2.5 flex items-center justify-between border-t border-border pt-2">
                      <span className="text-[11px] text-muted-foreground">{l.source}</span>
                      <span className="text-xs font-semibold text-success">{formatCurrency(l.value)}</span>
                    </div>
                  </article>
                ))}
                {items.length === 0 && (
                  <div className="rounded-xl border border-dashed border-border p-6 text-center text-xs text-muted-foreground">
                    Drop leads here
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <AddLeadDialog open={addOpen} onOpenChange={setAddOpen} />
    </AppLayout>
  );
}

