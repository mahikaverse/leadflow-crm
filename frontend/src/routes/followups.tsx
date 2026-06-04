import { createFileRoute, Link } from "@tanstack/react-router";
import { AppLayout } from "@/components/layout/app-layout";
import { useLeads } from "@/lib/leads-store";
import { useMemo } from "react";
import { Phone, CheckCircle2, AlertCircle, Calendar, Clock, Bell, Loader2 } from "lucide-react";
import { formatDate, daysFromNow } from "@/lib/format";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/followups")({
  head: () => ({
    meta: [
      { title: "Follow-ups — LeadFlow CRM" },
      { name: "description", content: "Stay on top of overdue, due-today, and upcoming follow-ups." },
    ],
  }),
  component: Followups,
});

function Followups() {
  const { leads, loading, completeFollowUp } = useLeads();

  const groups = useMemo(() => {
    const overdue: any[] = []; const today: any[] = []; const upcoming: any[] = []; const completed: any[] = [];
    leads.forEach((l) => {
      if (l.followUpCompletedAt) { completed.push(l); return; }
      if (!l.followUpDate || l.status === "Converted" || l.status === "Lost") return;
      const d = daysFromNow(l.followUpDate);
      if (d < 0) overdue.push(l);
      else if (d === 0) today.push(l);
      else if (d <= 14) upcoming.push(l);
    });
    return { overdue, today, upcoming, completed };
  }, [leads]);

  if (loading && leads.length === 0) {
    return (
      <AppLayout>
        <div className="flex h-[50vh] flex-col items-center justify-center space-y-4">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
          <p className="text-muted-foreground">Loading schedules...</p>
        </div>
      </AppLayout>
    );
  }

  return (
    <AppLayout>
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Follow-ups</h1>
        <p className="mt-1 text-sm text-muted-foreground">Stay on top of your outreach schedule.</p>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Summary icon={AlertCircle} label="Overdue" value={groups.overdue.length} color="text-destructive bg-destructive/10" />
        <Summary icon={Clock} label="Due Today" value={groups.today.length} color="text-warning bg-warning/10" />
        <Summary icon={Calendar} label="Upcoming" value={groups.upcoming.length} color="text-success bg-success/10" />
        <Summary icon={CheckCircle2} label="Completed" value={groups.completed.length} color="text-primary bg-primary/10" />
      </div>

      <Section title="Overdue" subtitle="Follow-ups that need attention now" tone="destructive" items={groups.overdue} onComplete={completeFollowUp} />
      <Section title="Due Today" subtitle="Reach out today" tone="warning" items={groups.today} onComplete={completeFollowUp} />
      <Section title="Upcoming" subtitle="Within the next two weeks" tone="default" items={groups.upcoming} onComplete={completeFollowUp} />
      <Section title="Completed" subtitle="Finished follow-ups" tone="default" items={groups.completed} />
    </AppLayout>
  );
}

function Summary({ icon: Icon, label, value, color }: { icon: any; label: string; value: number; color: string }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-5 shadow-soft">
      <div className="flex items-center gap-3">
        <div className={cn("flex h-11 w-11 items-center justify-center rounded-xl", color)}>
          <Icon className="h-5 w-5" />
        </div>
        <div>
          <div className="text-2xl font-bold">{value}</div>
          <div className="text-xs text-muted-foreground">{label}</div>
        </div>
      </div>
    </div>
  );
}

function Section({ title, subtitle, items, tone, onComplete }: { title: string; subtitle: string; items: any[]; tone: "destructive" | "warning" | "default"; onComplete?: (id: string) => void }) {
  const accent = tone === "destructive" ? "border-l-destructive" : tone === "warning" ? "border-l-warning" : "border-l-primary";
  return (
    <section className="mt-6">
      <div className="mb-3 flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold">{title}</h2>
          <p className="text-xs text-muted-foreground">{subtitle}</p>
        </div>
        <span className="rounded-full bg-muted px-2.5 py-0.5 text-xs font-medium">{items.length}</span>
      </div>

      {items.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-border bg-card p-10 text-center">
          <Bell className="mx-auto h-8 w-8 text-muted-foreground/50" />
          <p className="mt-2 text-sm text-muted-foreground">All clear — nothing here.</p>
        </div>
      ) : (
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
          {items.map((l) => {
            const d = daysFromNow(l.followUpDate);
            return (
              <div key={l._id} className={cn("rounded-2xl border border-l-4 border-border bg-card p-4 shadow-soft transition-transform hover:-translate-y-0.5", accent)}>
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl text-xs font-semibold text-white bg-primary">
                    {l.name.split(" ").map((n: string) => n[0]).join("").slice(0, 2)}
                  </div>
                  <div className="min-w-0 flex-1">
                    <Link to="/leads/$id" params={{ id: l._id }} className="block truncate text-sm font-semibold hover:underline">{l.name}</Link>
                    <div className="truncate text-xs text-muted-foreground">{l.company}</div>
                  </div>
                </div>
                <div className="mt-3 space-y-1 text-xs text-muted-foreground">
                  <div className="truncate">{l.email}</div>
                  <div>{l.phone}</div>
                  <div className={cn("font-medium", tone === "destructive" ? "text-destructive" : tone === "warning" ? "text-warning" : "text-foreground")}>
                    {tone === "destructive" ? `${Math.abs(d)} day(s) overdue` : tone === "warning" ? "Due today" : `In ${d} day(s) · ${formatDate(l.followUpDate)}`}
                  </div>
                </div>
                <div className="mt-3 flex gap-2">
                  <a href={`tel:${l.phone}`} className="flex flex-1 items-center justify-center gap-1.5 rounded-xl border border-input bg-card py-2 text-xs font-medium hover:bg-muted">
                    <Phone className="h-3.5 w-3.5" /> Call
                  </a>
                  {onComplete && <button onClick={() => { onComplete(l._id); toast.success("Marked complete"); }} className="flex flex-1 items-center justify-center gap-1.5 rounded-xl gradient-primary py-2 text-xs font-semibold text-primary-foreground">
                    <CheckCircle2 className="h-3.5 w-3.5" /> Complete
                  </button>}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
}

