import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { Area, AreaChart, CartesianGrid, Cell, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { Bell, CheckCircle2, FileText, Loader2, Plus, TrendingUp, Users, XCircle } from "lucide-react";
import { AppLayout } from "@/components/layout/app-layout";
import { AddLeadDialog } from "@/components/add-lead-dialog";
import { useAuth } from "@/lib/auth-store";
import { useLeads } from "@/lib/leads-store";
import * as api from "@/lib/api/leads";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/")({ head: () => ({ meta: [{ title: "Dashboard - LeadFlow CRM" }] }), component: Dashboard });
const colors: Record<string, string> = { New: "var(--info)", Contacted: "var(--warning)", Qualified: "var(--primary)", Converted: "var(--success)", Lost: "var(--destructive)" };

function Dashboard() {
  const { user } = useAuth();
  const { leads, loading } = useLeads();
  const [analytics, setAnalytics] = useState<api.Analytics | null>(null);
  const [addOpen, setAddOpen] = useState(false);
  useEffect(() => { api.getAnalytics().then(setAnalytics).catch(() => setAnalytics(null)); }, [leads]);
  const recent = useMemo(() => leads.slice().sort((a, b) => +new Date(b.updatedAt) - +new Date(a.updatedAt)).slice(0, 6), [leads]);
  const monthly = (analytics?.monthlyGrowth || []).map((row) => ({ ...row, label: new Date(row.year, row.month - 1).toLocaleDateString("en-US", { month: "short", year: "2-digit" }) }));
  const localStats = useMemo(() => {
    const activeStatuses: api.LeadStatus[] = ["New", "Contacted", "Qualified"];
    const totalLeads = leads.length;
    const convertedLeads = leads.filter((lead) => lead.status === "Converted").length;
    const statusDistribution = (Object.keys(colors) as api.LeadStatus[]).map((status) => ({
      name: status,
      value: leads.filter((lead) => lead.status === status).length,
    }));

    return {
      totalLeads,
      activeLeads: leads.filter((lead) => activeStatuses.includes(lead.status)).length,
      convertedLeads,
      lostLeads: leads.filter((lead) => lead.status === "Lost").length,
      conversionRate: totalLeads ? Number(((convertedLeads / totalLeads) * 100).toFixed(1)) : 0,
      followUps: leads.filter((lead) => lead.followUpDate && !lead.followUpCompletedAt && activeStatuses.includes(lead.status)).length,
      statusDistribution,
      monthlyGrowth: [],
    };
  }, [leads]);

  if (loading && !leads.length) return <AppLayout><div className="flex h-[50vh] items-center justify-center gap-3 text-muted-foreground"><Loader2 className="h-8 w-8 animate-spin text-primary" /> Loading dashboard...</div></AppLayout>;
  const stats = analytics || localStats;

  return (
    <AppLayout>
      <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between"><div><h1 className="text-3xl font-bold tracking-tight">Welcome back, {user?.name || "there"}</h1><p className="mt-1 text-sm text-muted-foreground">Here is what is happening with your pipeline today.</p></div><button onClick={() => setAddOpen(true)} className="inline-flex items-center gap-2 self-start rounded-xl gradient-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground shadow-glow"><Plus className="h-4 w-4" /> Add Lead</button></div>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
        <Stat icon={Users} label="Total Leads" value={stats.totalLeads} color="text-primary" />
        <Stat icon={Users} label="Active Leads" value={stats.activeLeads} color="text-info" />
        <Stat icon={CheckCircle2} label="Converted" value={stats.convertedLeads} color="text-success" />
        <Stat icon={XCircle} label="Lost" value={stats.lostLeads} color="text-destructive" />
        <Stat icon={TrendingUp} label="Conversion Rate" value={`${stats.conversionRate}%`} color="text-warning" />
        <Stat icon={Bell} label="Follow-ups" value={stats.followUps} color="text-primary" />
      </div>
      <div className="mt-6 grid gap-5 lg:grid-cols-3">
        <Card title="Monthly Lead Growth" className="lg:col-span-2"><Chart>{monthly.length ? <AreaChart data={monthly}><CartesianGrid strokeDasharray="3 3" vertical={false} /><XAxis dataKey="label" /><YAxis allowDecimals={false} /><Tooltip /><Area dataKey="leads" stroke="var(--primary)" fill="var(--primary)" fillOpacity={0.2} /><Area dataKey="converted" stroke="var(--success)" fill="var(--success)" fillOpacity={0.15} /></AreaChart> : <Empty />}</Chart></Card>
        <Card title="Status Distribution"><Chart>{stats.statusDistribution.length ? <PieChart><Pie data={stats.statusDistribution} dataKey="value" nameKey="name" innerRadius={55} outerRadius={90}>{stats.statusDistribution.map((row) => <Cell key={row.name} fill={colors[row.name]} />)}</Pie><Tooltip /></PieChart> : <Empty />}</Chart></Card>
      </div>
      <div className="mt-5"><Card title="Recently Updated Leads"><div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{recent.length ? recent.map((lead) => <Link key={lead._id} to="/leads/$id" params={{ id: lead._id }} className="rounded-xl border border-border p-4 hover:bg-muted"><div className="font-medium">{lead.name}</div><div className="text-xs text-muted-foreground">{lead.company} - {lead.status}</div></Link>) : <div className="col-span-full"><Empty /></div>}</div></Card></div>
      <AddLeadDialog open={addOpen} onOpenChange={setAddOpen} />
    </AppLayout>
  );
}

function Empty() { return <div className="flex h-full min-h-32 items-center justify-center text-sm text-muted-foreground"><FileText className="mr-2 h-5 w-5" /> No database data yet</div>; }
function Chart({ children }: { children: React.ReactNode }) { return <div className="h-72"><ResponsiveContainer width="100%" height="100%">{children as any}</ResponsiveContainer></div>; }
function Card({ title, children, className }: { title: string; children: React.ReactNode; className?: string }) { return <div className={cn("rounded-2xl border border-border bg-card p-5 shadow-soft", className)}><h3 className="mb-4 font-semibold">{title}</h3>{children}</div>; }
function Stat({ icon: Icon, label, value, color }: { icon: any; label: string; value: string | number; color: string }) { return <div className="rounded-2xl border border-border bg-card p-5 shadow-soft"><div className={cn("flex h-10 w-10 items-center justify-center rounded-xl bg-muted", color)}><Icon className="h-5 w-5" /></div><div className="mt-4 text-2xl font-bold">{value}</div><div className="mt-1 text-xs text-muted-foreground">{label}</div></div>; }
