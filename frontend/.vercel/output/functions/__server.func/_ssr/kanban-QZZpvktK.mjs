import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { A as AppLayout, c as cn } from "./app-layout-RVqOMfVp.mjs";
import { b as useLeads } from "./router-GXpQW7Bb.mjs";
import { f as formatCurrency, a as formatDate } from "./format-ijJidHG7.mjs";
import { A as AddLeadDialog } from "./add-lead-dialog-ByVg73M4.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { b as LoaderCircle, h as Plus, G as GripVertical, M as Mail, d as Phone, m as Calendar } from "../_libs/lucide-react.mjs";
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
import "../_libs/radix-ui__react-dialog.mjs";
import "./label-DVLk335W.mjs";
import "../_libs/class-variance-authority.mjs";
import "../_libs/radix-ui__react-label.mjs";
import "./select-WHAptX-z.mjs";
import "../_libs/radix-ui__react-select.mjs";
import "../_libs/radix-ui__number.mjs";
import "../_libs/radix-ui__react-use-previous.mjs";
import "../_libs/@radix-ui/react-visually-hidden+[...].mjs";
const columns = [{
  key: "New",
  color: "bg-info",
  ring: "ring-info/40"
}, {
  key: "Contacted",
  color: "bg-warning",
  ring: "ring-warning/40"
}, {
  key: "Qualified",
  color: "bg-primary",
  ring: "ring-primary/40"
}, {
  key: "Converted",
  color: "bg-success",
  ring: "ring-success/40"
}, {
  key: "Lost",
  color: "bg-destructive",
  ring: "ring-destructive/40"
}];
function KanbanPage() {
  const {
    leads,
    loading,
    updateLeadStatus
  } = useLeads();
  const [draggingId, setDraggingId] = reactExports.useState(null);
  const [overCol, setOverCol] = reactExports.useState(null);
  const [addOpen, setAddOpen] = reactExports.useState(false);
  const grouped = reactExports.useMemo(() => {
    const g = {
      New: [],
      Contacted: [],
      Qualified: [],
      Converted: [],
      Lost: []
    };
    leads.forEach((l) => {
      if (g[l.status]) {
        g[l.status].push(l);
      }
    });
    return g;
  }, [leads]);
  async function onDrop(e, status) {
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
    return /* @__PURE__ */ jsxRuntimeExports.jsx(AppLayout, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex h-[50vh] flex-col items-center justify-center space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-8 w-8 animate-spin text-primary" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Loading board..." })
    ] }) });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(AppLayout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-3xl font-bold tracking-tight", children: "Pipeline Board" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: "Drag leads between columns to update their status." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setAddOpen(true), className: "inline-flex items-center gap-2 self-start rounded-xl gradient-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground shadow-glow hover:scale-[1.02] transition-transform", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-4 w-4" }),
        " Add Lead"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 grid auto-rows-min gap-4 lg:grid-cols-5", children: columns.map((col) => {
      const items = grouped[col.key];
      const total = items.reduce((s, l) => s + (l.value || 0), 0);
      const isOver = overCol === col.key;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { onDragOver: (e) => {
        e.preventDefault();
        setOverCol(col.key);
      }, onDragLeave: () => setOverCol((c) => c === col.key ? null : c), onDrop: (e) => onDrop(e, col.key), className: cn("flex min-h-[320px] flex-col rounded-2xl border border-border bg-muted/30 p-3 transition-all", isOver && "bg-accent ring-2 " + col.ring), children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3 flex items-center justify-between px-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: cn("h-2.5 w-2.5 rounded-full", col.color) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-semibold", children: col.key }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-md bg-card px-2 py-0.5 text-xs font-medium text-muted-foreground", children: items.length })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] font-medium text-muted-foreground", children: formatCurrency(total) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 space-y-2 overflow-y-auto pr-1", children: [
          items.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { draggable: true, onDragStart: () => setDraggingId(l._id), onDragEnd: () => {
            setDraggingId(null);
            setOverCol(null);
          }, className: cn("group cursor-grab rounded-xl border border-border bg-card p-3 shadow-sm transition-all hover:shadow-md active:cursor-grabbing", draggingId === l._id && "opacity-50 rotate-2 scale-95"), children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-[11px] font-semibold text-white bg-primary", children: l.name.split(" ").map((n) => n[0]).join("").slice(0, 2) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "truncate text-sm font-semibold", children: l.name }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "truncate text-xs text-muted-foreground", children: l.company })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(GripVertical, { className: "h-4 w-4 text-muted-foreground/40 opacity-0 transition-opacity group-hover:opacity-100" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2.5 space-y-1 text-xs text-muted-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-3 w-3" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "truncate", children: l.email })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-3 w-3" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: l.phone })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "h-3 w-3" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: formatDate(l.followUpDate) })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2.5 flex items-center justify-between border-t border-border pt-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] text-muted-foreground", children: l.source }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold text-success", children: formatCurrency(l.value) })
            ] })
          ] }, l._id)),
          items.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-xl border border-dashed border-border p-6 text-center text-xs text-muted-foreground", children: "Drop leads here" })
        ] })
      ] }, col.key);
    }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AddLeadDialog, { open: addOpen, onOpenChange: setAddOpen })
  ] });
}
export {
  KanbanPage as component
};
