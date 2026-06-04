import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { A as AppLayout, c as cn } from "./app-layout-RVqOMfVp.mjs";
import { f as formatCurrency } from "./format-ijJidHG7.mjs";
import { b as useLeads, g as getAnalytics } from "./router-GXpQW7Bb.mjs";
import "../_libs/sonner.mjs";
import { b as LoaderCircle, T as TrendingUp, g as Target, f as Users, q as Trophy } from "../_libs/lucide-react.mjs";
import { B as BarChart, C as CartesianGrid, X as XAxis, Y as YAxis, T as Tooltip, L as Legend, a as Bar, b as LineChart, c as Line, P as PieChart, d as Pie, e as Cell, R as ResponsiveContainer } from "../_libs/recharts.mjs";
import "../_libs/tanstack__react-router.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "crypto";
import "async_hooks";
import "util";
import "stream";
import "../_libs/isbot.mjs";
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
import "../_libs/radix-ui__react-dropdown-menu.mjs";
import "../_libs/radix-ui__primitive.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/radix-ui__react-context.mjs";
import "../_libs/@radix-ui/react-use-controllable-state+[...].mjs";
import "../_libs/@radix-ui/react-use-layout-effect+[...].mjs";
import "../_libs/radix-ui__react-primitive.mjs";
import "../_libs/radix-ui__react-slot.mjs";
import "../_libs/radix-ui__react-menu.mjs";
import "../_libs/radix-ui__react-collection.mjs";
import "../_libs/radix-ui__react-direction.mjs";
import "../_libs/@radix-ui/react-dismissable-layer+[...].mjs";
import "../_libs/@radix-ui/react-use-callback-ref+[...].mjs";
import "../_libs/@radix-ui/react-use-escape-keydown+[...].mjs";
import "../_libs/radix-ui__react-focus-guards.mjs";
import "../_libs/radix-ui__react-focus-scope.mjs";
import "../_libs/radix-ui__react-popper.mjs";
import "../_libs/floating-ui__react-dom.mjs";
import "../_libs/floating-ui__dom.mjs";
import "../_libs/floating-ui__core.mjs";
import "../_libs/floating-ui__utils.mjs";
import "../_libs/radix-ui__react-arrow.mjs";
import "../_libs/radix-ui__react-use-size.mjs";
import "../_libs/radix-ui__react-portal.mjs";
import "../_libs/radix-ui__react-presence.mjs";
import "../_libs/radix-ui__react-roving-focus.mjs";
import "../_libs/radix-ui__react-id.mjs";
import "../_libs/aria-hidden.mjs";
import "../_libs/react-remove-scroll.mjs";
import "tslib";
import "../_libs/react-remove-scroll-bar.mjs";
import "../_libs/react-style-singleton.mjs";
import "../_libs/get-nonce.mjs";
import "../_libs/use-sidecar.mjs";
import "../_libs/use-callback-ref.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/axios.mjs";
import "../_libs/form-data.mjs";
import "fs";
import "../_libs/combined-stream.mjs";
import "../_libs/delayed-stream.mjs";
import "path";
import "http";
import "https";
import "url";
import "../_libs/mime-types.mjs";
import "../_libs/mime-db.mjs";
import "../_libs/asynckit.mjs";
import "../_libs/es-set-tostringtag.mjs";
import "../_libs/get-intrinsic.mjs";
import "../_libs/es-object-atoms.mjs";
import "../_libs/es-errors.mjs";
import "../_libs/math-intrinsics.mjs";
import "../_libs/gopd.mjs";
import "../_libs/es-define-property.mjs";
import "../_libs/has-symbols.mjs";
import "../_libs/get-proto.mjs";
import "../_libs/dunder-proto.mjs";
import "../_libs/call-bind-apply-helpers.mjs";
import "../_libs/function-bind.mjs";
import "../_libs/hasown.mjs";
import "../_libs/has-tostringtag.mjs";
import "../_libs/proxy-from-env.mjs";
import "../_libs/https-proxy-agent.mjs";
import "net";
import "tls";
import "assert";
import "../_libs/debug.mjs";
import "../_libs/ms.mjs";
import "tty";
import "../_libs/supports-color.mjs";
import "os";
import "../_libs/has-flag.mjs";
import "../_libs/agent-base.mjs";
import "events";
import "http2";
import "../_libs/follow-redirects.mjs";
import "zlib";
import "../_libs/lodash.mjs";
import "../_libs/react-smooth.mjs";
import "../_libs/prop-types.mjs";
import "../_libs/fast-equals.mjs";
import "../_libs/tiny-invariant.mjs";
import "../_libs/react-is.mjs";
import "../_libs/d3-shape.mjs";
import "../_libs/d3-path.mjs";
import "../_libs/victory-vendor.mjs";
import "../_libs/d3-scale.mjs";
import "../_libs/internmap.mjs";
import "../_libs/d3-array.mjs";
import "../_libs/d3-time-format.mjs";
import "../_libs/d3-time.mjs";
import "../_libs/d3-interpolate.mjs";
import "../_libs/d3-color.mjs";
import "../_libs/d3-format.mjs";
import "../_libs/recharts-scale.mjs";
import "../_libs/decimal.js-light.mjs";
import "../_libs/eventemitter3.mjs";
const colors = {
  New: "var(--info)",
  Contacted: "var(--warning)",
  Qualified: "var(--primary)",
  Converted: "var(--success)",
  Lost: "var(--destructive)"
};
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
function AnalyticsPage() {
  const {
    leads
  } = useLeads();
  const [data, setData] = reactExports.useState(null);
  const [error, setError] = reactExports.useState("");
  reactExports.useEffect(() => {
    getAnalytics().then((nextData) => {
      setData(nextData);
      setError("");
    }).catch((err) => setError(err.response?.data?.message || "Unable to load analytics"));
  }, [leads]);
  if (!data && !error) return /* @__PURE__ */ jsxRuntimeExports.jsxs(PageState, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-8 w-8 animate-spin text-primary" }),
    " Loading analytics..."
  ] });
  if (!data) return /* @__PURE__ */ jsxRuntimeExports.jsx(PageState, { children: error });
  const monthlyGrowth = data.monthlyGrowth.map((row) => ({
    ...row,
    label: `${months[row.month - 1]} ${String(row.year).slice(-2)}`
  }));
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(AppLayout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-3xl font-bold tracking-tight", children: "Analytics" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: "Track performance, sources, and revenue across your pipeline." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Kpi, { icon: TrendingUp, label: "Pipeline Value", value: formatCurrency(data.pipelineValue), color: "text-primary bg-primary/10" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Kpi, { icon: Target, label: "Avg Deal Size", value: formatCurrency(data.averageDealSize), color: "text-success bg-success/10" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Kpi, { icon: Users, label: "Active Leads", value: String(data.activeLeads), color: "text-info bg-info/10" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Kpi, { icon: Trophy, label: "Win Rate", value: `${data.conversionRate}%`, color: "text-warning bg-warning/10" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 grid gap-5 lg:grid-cols-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { title: "Lead Source Performance", subtitle: "Captured vs converted by channel", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Chart, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(BarChart, { data: data.sourcePerformance, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CartesianGrid, { strokeDasharray: "3 3", vertical: false }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(XAxis, { dataKey: "source", fontSize: 11 }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(YAxis, { allowDecimals: false }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Legend, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Bar, { dataKey: "leads", fill: "var(--primary)" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Bar, { dataKey: "converted", fill: "var(--success)" })
      ] }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { title: "Monthly Growth", subtitle: "Database-driven conversion trend", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Chart, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(LineChart, { data: monthlyGrowth, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CartesianGrid, { strokeDasharray: "3 3", vertical: false }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(XAxis, { dataKey: "label", fontSize: 11 }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(YAxis, { allowDecimals: false }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Legend, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Line, { dataKey: "leads", stroke: "var(--primary)", strokeWidth: 3 }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Line, { dataKey: "converted", stroke: "var(--success)", strokeWidth: 3 })
      ] }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { title: "Status Distribution", subtitle: "All pipeline stages", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Chart, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(PieChart, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Pie, { data: data.statusDistribution, dataKey: "value", nameKey: "name", innerRadius: 55, outerRadius: 90, children: data.statusDistribution.map((row) => /* @__PURE__ */ jsxRuntimeExports.jsx(Cell, { fill: colors[row.name] }, row.name)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Legend, {})
      ] }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { title: "Top Companies", subtitle: "By total deal value", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2.5", children: data.topCompanies.length ? data.topCompanies.map((company, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 rounded-xl p-2 hover:bg-muted", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-xs font-bold text-primary", children: [
          "#",
          index + 1
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "truncate text-sm font-medium", children: company.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-muted-foreground", children: [
            company.count,
            " leads"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold text-success", children: formatCurrency(company.value) })
      ] }, company.name)) : /* @__PURE__ */ jsxRuntimeExports.jsx(Empty, {}) }) })
    ] })
  ] });
}
function PageState({
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AppLayout, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-[50vh] items-center justify-center gap-3 text-sm text-muted-foreground", children }) });
}
function Empty() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "py-12 text-center text-sm text-muted-foreground", children: "No database data yet." });
}
function Chart({
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-72", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { width: "100%", height: "100%", children }) });
}
function Card({
  title,
  subtitle,
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border bg-card p-5 shadow-soft", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold", children: title }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4 text-xs text-muted-foreground", children: subtitle }),
    children
  ] });
}
function Kpi({
  icon: Icon,
  label,
  value,
  color
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border bg-card p-5 shadow-soft", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("flex h-10 w-10 items-center justify-center rounded-xl", color), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-5 w-5" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 text-2xl font-bold", children: value }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-xs text-muted-foreground", children: label })
  ] });
}
export {
  AnalyticsPage as component
};
