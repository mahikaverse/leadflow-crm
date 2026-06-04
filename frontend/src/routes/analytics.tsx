import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Bar, BarChart, CartesianGrid, Cell, Legend, Line, LineChart, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { Loader2, Target, TrendingUp, Trophy, Users } from "lucide-react";
import { AppLayout } from "@/components/layout/app-layout";
import { cn } from "@/lib/utils";
import { formatCurrency } from "@/lib/format";
import * as api from "@/lib/api/leads";
import { useLeads } from "@/lib/leads-store";

export const Route = createFileRoute("/analytics")({
  head: () => ({ meta: [{ title: "Analytics - LeadFlow CRM" }] }),
  component: AnalyticsPage,
});

const colors: Record<string, string> = { New: "var(--info)", Contacted: "var(--warning)", Qualified: "var(--primary)", Converted: "var(--success)", Lost: "var(--destructive)" };
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function AnalyticsPage() {
  const { leads } = useLeads();
  const [data, setData] = useState<api.Analytics | null>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    api.getAnalytics()
      .then((nextData) => {
        setData(nextData);
        setError("");
      })
      .catch((err) => setError(err.response?.data?.message || "Unable to load analytics"));
  }, [leads]);

  if (!data && !error) return <PageState><Loader2 className="h-8 w-8 animate-spin text-primary" /> Loading analytics...</PageState>;
  if (!data) return <PageState>{error}</PageState>;
  const monthlyGrowth = data.monthlyGrowth.map((row) => ({ ...row, label: `${months[row.month - 1]} ${String(row.year).slice(-2)}` }));

  return (
    <AppLayout>
      <h1 className="text-3xl font-bold tracking-tight">Analytics</h1>
      <p className="mt-1 text-sm text-muted-foreground">Track performance, sources, and revenue across your pipeline.</p>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Kpi icon={TrendingUp} label="Pipeline Value" value={formatCurrency(data.pipelineValue)} color="text-primary bg-primary/10" />
        <Kpi icon={Target} label="Avg Deal Size" value={formatCurrency(data.averageDealSize)} color="text-success bg-success/10" />
        <Kpi icon={Users} label="Active Leads" value={String(data.activeLeads)} color="text-info bg-info/10" />
        <Kpi icon={Trophy} label="Win Rate" value={`${data.conversionRate}%`} color="text-warning bg-warning/10" />
      </div>
      <div className="mt-5 grid gap-5 lg:grid-cols-2">
        <Card title="Lead Source Performance" subtitle="Captured vs converted by channel"><Chart><BarChart data={data.sourcePerformance}><CartesianGrid strokeDasharray="3 3" vertical={false} /><XAxis dataKey="source" fontSize={11} /><YAxis allowDecimals={false} /><Tooltip /><Legend /><Bar dataKey="leads" fill="var(--primary)" /><Bar dataKey="converted" fill="var(--success)" /></BarChart></Chart></Card>
        <Card title="Monthly Growth" subtitle="Database-driven conversion trend"><Chart><LineChart data={monthlyGrowth}><CartesianGrid strokeDasharray="3 3" vertical={false} /><XAxis dataKey="label" fontSize={11} /><YAxis allowDecimals={false} /><Tooltip /><Legend /><Line dataKey="leads" stroke="var(--primary)" strokeWidth={3} /><Line dataKey="converted" stroke="var(--success)" strokeWidth={3} /></LineChart></Chart></Card>
        <Card title="Status Distribution" subtitle="All pipeline stages"><Chart><PieChart><Pie data={data.statusDistribution} dataKey="value" nameKey="name" innerRadius={55} outerRadius={90}>{data.statusDistribution.map((row) => <Cell key={row.name} fill={colors[row.name]} />)}</Pie><Tooltip /><Legend /></PieChart></Chart></Card>
        <Card title="Top Companies" subtitle="By total deal value"><div className="space-y-2.5">{data.topCompanies.length ? data.topCompanies.map((company, index) => <div key={company.name} className="flex items-center gap-3 rounded-xl p-2 hover:bg-muted"><div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-xs font-bold text-primary">#{index + 1}</div><div className="min-w-0 flex-1"><div className="truncate text-sm font-medium">{company.name}</div><div className="text-xs text-muted-foreground">{company.count} leads</div></div><div className="text-sm font-semibold text-success">{formatCurrency(company.value)}</div></div>) : <Empty />}</div></Card>
      </div>
    </AppLayout>
  );
}

function PageState({ children }: { children: React.ReactNode }) { return <AppLayout><div className="flex h-[50vh] items-center justify-center gap-3 text-sm text-muted-foreground">{children}</div></AppLayout>; }
function Empty() { return <div className="py-12 text-center text-sm text-muted-foreground">No database data yet.</div>; }
function Chart({ children }: { children: React.ReactNode }) { return <div className="h-72"><ResponsiveContainer width="100%" height="100%">{children as any}</ResponsiveContainer></div>; }
function Card({ title, subtitle, children }: { title: string; subtitle: string; children: React.ReactNode }) { return <div className="rounded-2xl border border-border bg-card p-5 shadow-soft"><h3 className="font-semibold">{title}</h3><p className="mb-4 text-xs text-muted-foreground">{subtitle}</p>{children}</div>; }
function Kpi({ icon: Icon, label, value, color }: { icon: any; label: string; value: string; color: string }) { return <div className="rounded-2xl border border-border bg-card p-5 shadow-soft"><div className={cn("flex h-10 w-10 items-center justify-center rounded-xl", color)}><Icon className="h-5 w-5" /></div><div className="mt-4 text-2xl font-bold">{value}</div><div className="mt-1 text-xs text-muted-foreground">{label}</div></div>; }
