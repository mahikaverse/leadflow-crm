import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { d as useNavigate, L as Link } from "../_libs/tanstack__react-router.mjs";
import { A as AppLayout, c as cn } from "./app-layout-RVqOMfVp.mjs";
import { R as Route, b as useLeads } from "./router-GXpQW7Bb.mjs";
import { S as StatusBadge } from "./status-badge-wY-GsQjV.mjs";
import { d as daysFromNow, f as formatCurrency, a as formatDate, t as timeAgo, b as formatDateTime } from "./format-ijJidHG7.mjs";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from "./select-WHAptX-z.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { b as LoaderCircle, t as ArrowLeft, u as Building2, k as Trash2, M as Mail, d as Phone, m as Calendar, p as CircleCheck, v as Send, w as MessageSquarePlus, s as FileText, X, h as Plus, R as RefreshCw, j as Pencil } from "../_libs/lucide-react.mjs";
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
import "../_libs/radix-ui__react-select.mjs";
import "../_libs/radix-ui__number.mjs";
import "../_libs/radix-ui__react-use-previous.mjs";
import "../_libs/@radix-ui/react-visually-hidden+[...].mjs";
function LeadDetail() {
  const {
    id
  } = Route.useParams();
  const {
    leads,
    loading,
    addNote,
    deleteNote,
    updateLeadStatus,
    deleteLead,
    completeFollowUp
  } = useLeads();
  const navigate = useNavigate();
  const lead = leads.find((l) => l._id === id);
  const [noteText, setNoteText] = reactExports.useState("");
  if (loading && !lead) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(AppLayout, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex h-[50vh] flex-col items-center justify-center space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-8 w-8 animate-spin text-primary" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Loading lead details..." })
    ] }) });
  }
  if (!lead) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(AppLayout, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border bg-card p-12 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-lg font-semibold", children: "Lead not found" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/leads", className: "mt-3 inline-block text-sm font-medium text-primary hover:underline", children: "← Back to leads" })
    ] }) });
  }
  const days = daysFromNow(lead.followUpDate);
  const notes = Array.isArray(lead.notes) ? lead.notes : lead.notes ? [{
    _id: "lead-notes",
    text: lead.notes,
    createdAt: lead.createdAt
  }] : [];
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
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(AppLayout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/leads", className: "inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "h-4 w-4" }),
      " Back to leads"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 overflow-hidden rounded-2xl border border-border bg-card shadow-soft", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-24 gradient-hero" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-5 p-6 sm:flex-row sm:items-end sm:justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "-mt-16 flex items-end gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-24 w-24 items-center justify-center rounded-2xl border-4 border-card text-2xl font-bold text-white shadow-elevated bg-primary", children: lead.name.split(" ").map((n) => n[0]).join("").slice(0, 2) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pb-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-bold tracking-tight", children: lead.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-1 flex items-center gap-2 text-sm text-muted-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Building2, { className: "h-3.5 w-3.5" }),
              " ",
              lead.company
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: lead.status, onValueChange: (v) => {
            updateLeadStatus(lead._id, v);
            toast.success(`Status updated to ${v}`);
          }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "h-10 w-[160px] rounded-xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: ["New", "Contacted", "Qualified", "Converted", "Lost"].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: s, children: s }, s)) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: async () => {
            if (confirm("Delete this lead?")) {
              await deleteLead(lead._id);
              toast.success("Lead deleted");
              navigate({
                to: "/leads"
              });
            }
          }, className: "inline-flex items-center gap-1.5 rounded-xl border border-destructive/30 px-3 py-2 text-sm font-medium text-destructive hover:bg-destructive/10", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "h-4 w-4" }),
            " Delete"
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 grid gap-5 lg:grid-cols-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border bg-card p-5 shadow-soft", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-semibold", children: "Contact Information" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 space-y-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(InfoRow, { icon: Mail, label: "Email", value: lead.email }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(InfoRow, { icon: Phone, label: "Phone", value: lead.phone }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(InfoRow, { icon: Building2, label: "Company", value: lead.company })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border bg-card p-5 shadow-soft", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-semibold", children: "Lead Details" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 space-y-3 text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Source" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: lead.source })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Status" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(StatusBadge, { status: lead.status })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Deal value" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-success", children: formatCurrency(lead.value) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Created" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: formatDate(lead.createdAt) })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: cn("rounded-2xl border p-5 shadow-soft", days < 0 ? "border-destructive/30 bg-destructive/5" : days === 0 ? "border-warning/30 bg-warning/5" : "border-border bg-card"), children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-semibold", children: "Next Follow-up" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "h-4 w-4 text-muted-foreground" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 text-xl font-bold", children: formatDate(lead.followUpDate) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: days < 0 ? `${Math.abs(days)} day(s) overdue` : days === 0 ? "Due today" : `In ${days} day(s)` }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => {
            completeFollowUp(lead._id);
            toast.success("Follow-up completed");
          }, className: "mt-3 inline-flex w-full items-center justify-center gap-1.5 rounded-xl gradient-primary py-2 text-sm font-semibold text-primary-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-4 w-4" }),
            " Mark as completed"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5 lg:col-span-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border bg-card p-5 shadow-soft", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-semibold", children: "Notes" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 flex gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: noteText, onChange: (e) => setNoteText(e.target.value), onKeyDown: (e) => {
              if (e.key === "Enter") handleAddNote();
            }, placeholder: "Add a quick note...", className: "h-10 flex-1 rounded-xl border border-input bg-background px-3 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: handleAddNote, className: "inline-flex items-center gap-1.5 rounded-xl gradient-primary px-4 text-sm font-medium text-primary-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "h-4 w-4" }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 space-y-3", children: notes.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-dashed border-border p-6 text-center text-sm text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MessageSquarePlus, { className: "mx-auto mb-2 h-6 w-6 opacity-50" }),
            " No notes yet"
          ] }) : notes.map((n) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group flex gap-3 rounded-xl border border-border bg-muted/30 p-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-warning/10 text-warning", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "h-4 w-4" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: n.text }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-xs text-muted-foreground", children: timeAgo(n.createdAt) })
            ] }),
            n._id !== "lead-notes" && /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => {
              deleteNote(lead._id, n._id);
            }, className: "opacity-0 transition-opacity group-hover:opacity-100", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-4 w-4 text-muted-foreground hover:text-destructive" }) })
          ] }, n._id)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border bg-card p-5 shadow-soft", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-semibold", children: "Activity Timeline" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 space-y-4", children: !lead.activities || lead.activities.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center py-6 text-sm text-muted-foreground", children: "No recent activity" }) : lead.activities.map((a, i) => {
            const Icon = a.type === "created" ? Plus : a.type === "status_changed" ? RefreshCw : a.type === "note_added" ? MessageSquarePlus : a.type === "followup_completed" ? CircleCheck : Pencil;
            return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-9 w-9 items-center justify-center rounded-full bg-accent text-accent-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-4 w-4" }) }),
                i < lead.activities.length - 1 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 w-px flex-1 bg-border" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 pb-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-medium", children: a.message }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: formatDateTime(a.at) })
              ] })
            ] }, a._id || i);
          }) })
        ] })
      ] })
    ] })
  ] });
}
function InfoRow({
  icon: Icon,
  label,
  value
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-9 w-9 items-center justify-center rounded-lg bg-muted text-muted-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-4 w-4" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: label }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "truncate text-sm font-medium", children: value })
    ] })
  ] });
}
export {
  LeadDetail as component
};
