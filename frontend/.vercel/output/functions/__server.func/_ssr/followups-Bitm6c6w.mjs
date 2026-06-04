import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { A as AppLayout, c as cn } from "./app-layout-RVqOMfVp.mjs";
import { b as useLeads } from "./router-GXpQW7Bb.mjs";
import { d as daysFromNow, a as formatDate } from "./format-ijJidHG7.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { b as LoaderCircle, n as CircleAlert, o as Clock, m as Calendar, p as CircleCheck, B as Bell, d as Phone } from "../_libs/lucide-react.mjs";
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
function Followups() {
  const {
    leads,
    loading,
    completeFollowUp
  } = useLeads();
  const groups = reactExports.useMemo(() => {
    const overdue = [];
    const today = [];
    const upcoming = [];
    const completed = [];
    leads.forEach((l) => {
      if (l.followUpCompletedAt) {
        completed.push(l);
        return;
      }
      if (!l.followUpDate || l.status === "Converted" || l.status === "Lost") return;
      const d = daysFromNow(l.followUpDate);
      if (d < 0) overdue.push(l);
      else if (d === 0) today.push(l);
      else if (d <= 14) upcoming.push(l);
    });
    return {
      overdue,
      today,
      upcoming,
      completed
    };
  }, [leads]);
  if (loading && leads.length === 0) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(AppLayout, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex h-[50vh] flex-col items-center justify-center space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-8 w-8 animate-spin text-primary" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Loading schedules..." })
    ] }) });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(AppLayout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-3xl font-bold tracking-tight", children: "Follow-ups" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: "Stay on top of your outreach schedule." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Summary, { icon: CircleAlert, label: "Overdue", value: groups.overdue.length, color: "text-destructive bg-destructive/10" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Summary, { icon: Clock, label: "Due Today", value: groups.today.length, color: "text-warning bg-warning/10" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Summary, { icon: Calendar, label: "Upcoming", value: groups.upcoming.length, color: "text-success bg-success/10" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Summary, { icon: CircleCheck, label: "Completed", value: groups.completed.length, color: "text-primary bg-primary/10" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { title: "Overdue", subtitle: "Follow-ups that need attention now", tone: "destructive", items: groups.overdue, onComplete: completeFollowUp }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { title: "Due Today", subtitle: "Reach out today", tone: "warning", items: groups.today, onComplete: completeFollowUp }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { title: "Upcoming", subtitle: "Within the next two weeks", tone: "default", items: groups.upcoming, onComplete: completeFollowUp }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { title: "Completed", subtitle: "Finished follow-ups", tone: "default", items: groups.completed })
  ] });
}
function Summary({
  icon: Icon,
  label,
  value,
  color
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-2xl border border-border bg-card p-5 shadow-soft", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("flex h-11 w-11 items-center justify-center rounded-xl", color), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-5 w-5" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-bold", children: value }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: label })
    ] })
  ] }) });
}
function Section({
  title,
  subtitle,
  items,
  tone,
  onComplete
}) {
  const accent = tone === "destructive" ? "border-l-destructive" : tone === "warning" ? "border-l-warning" : "border-l-primary";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mt-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3 flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-lg font-semibold", children: title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: subtitle })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full bg-muted px-2.5 py-0.5 text-xs font-medium", children: items.length })
    ] }),
    items.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-dashed border-border bg-card p-10 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Bell, { className: "mx-auto h-8 w-8 text-muted-foreground/50" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "All clear — nothing here." })
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-3 md:grid-cols-2 xl:grid-cols-3", children: items.map((l) => {
      const d = daysFromNow(l.followUpDate);
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: cn("rounded-2xl border border-l-4 border-border bg-card p-4 shadow-soft transition-transform hover:-translate-y-0.5", accent), children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-10 w-10 items-center justify-center rounded-xl text-xs font-semibold text-white bg-primary", children: l.name.split(" ").map((n) => n[0]).join("").slice(0, 2) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/leads/$id", params: {
              id: l._id
            }, className: "block truncate text-sm font-semibold hover:underline", children: l.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "truncate text-xs text-muted-foreground", children: l.company })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 space-y-1 text-xs text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "truncate", children: l.email }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: l.phone }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("font-medium", tone === "destructive" ? "text-destructive" : tone === "warning" ? "text-warning" : "text-foreground"), children: tone === "destructive" ? `${Math.abs(d)} day(s) overdue` : tone === "warning" ? "Due today" : `In ${d} day(s) · ${formatDate(l.followUpDate)}` })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 flex gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: `tel:${l.phone}`, className: "flex flex-1 items-center justify-center gap-1.5 rounded-xl border border-input bg-card py-2 text-xs font-medium hover:bg-muted", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-3.5 w-3.5" }),
            " Call"
          ] }),
          onComplete && /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => {
            onComplete(l._id);
            toast.success("Marked complete");
          }, className: "flex flex-1 items-center justify-center gap-1.5 rounded-xl gradient-primary py-2 text-xs font-semibold text-primary-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-3.5 w-3.5" }),
            " Complete"
          ] })
        ] })
      ] }, l._id);
    }) })
  ] });
}
export {
  Followups as component
};
