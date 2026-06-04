import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { A as AppLayout, c as cn } from "./app-layout-RVqOMfVp.mjs";
import { b as useLeads } from "./router-GXpQW7Bb.mjs";
import { S as StatusBadge } from "./status-badge-wY-GsQjV.mjs";
import { A as AddLeadDialog, D as Dialog, a as DialogContent, b as DialogHeader, c as DialogTitle, d as DialogDescription, T as Textarea, e as DialogFooter } from "./add-lead-dialog-ByVg73M4.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { L as Label, I as Input, B as Button } from "./label-DVLk335W.mjs";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from "./select-WHAptX-z.mjs";
import { f as formatCurrency, a as formatDate } from "./format-ijJidHG7.mjs";
import { b as LoaderCircle, D as Download, h as Plus, i as Search, F as Funnel, E as Eye, j as Pencil, k as Trash2, I as Inbox, C as ChevronLeft, l as ChevronRight } from "../_libs/lucide-react.mjs";
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
import "../_libs/class-variance-authority.mjs";
import "../_libs/radix-ui__react-label.mjs";
import "../_libs/radix-ui__react-select.mjs";
import "../_libs/radix-ui__number.mjs";
import "../_libs/radix-ui__react-use-previous.mjs";
import "../_libs/@radix-ui/react-visually-hidden+[...].mjs";
const sources = ["Website", "Referral", "LinkedIn", "Cold Call", "Event", "Email Campaign"];
const statuses = ["New", "Contacted", "Qualified", "Converted", "Lost"];
function toDateInputValue(value) {
  if (!value) return "";
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? "" : date.toISOString().slice(0, 10);
}
function getNotesValue(notes) {
  if (!notes) return "";
  if (typeof notes === "string") return notes;
  return notes.map((note) => note.text).join("\n");
}
function createForm(lead) {
  return {
    name: lead?.name ?? "",
    email: lead?.email ?? "",
    phone: lead?.phone ?? "",
    company: lead?.company ?? "",
    source: lead?.source || "Website",
    status: lead?.status || "New",
    value: lead?.value ?? 0,
    followUpDate: toDateInputValue(lead?.followUpDate),
    notes: lead ? getNotesValue(lead.notes) : ""
  };
}
function EditLeadDialog({ lead, open, onOpenChange }) {
  const { updateLead } = useLeads();
  const [form, setForm] = reactExports.useState(() => createForm(lead));
  const [errors, setErrors] = reactExports.useState({});
  const [isSubmitting, setIsSubmitting] = reactExports.useState(false);
  reactExports.useEffect(() => {
    if (open) {
      setForm(createForm(lead));
      setErrors({});
    }
  }, [lead, open]);
  async function submit(event) {
    event.preventDefault();
    if (!lead) return;
    const nextErrors = {};
    if (!form.name.trim()) nextErrors.name = "Name is required";
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) nextErrors.email = "Valid email required";
    if (!form.company.trim()) nextErrors.company = "Company is required";
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;
    setIsSubmitting(true);
    try {
      await updateLead(lead._id, {
        name: form.name.trim(),
        email: form.email.trim(),
        phone: form.phone.trim(),
        company: form.company.trim(),
        source: form.source,
        status: form.status,
        value: Math.max(0, Number(form.value) || 0),
        followUpDate: form.followUpDate ? new Date(form.followUpDate).toISOString() : "",
        notes: form.notes
      });
      toast.success("Lead updated successfully", { description: form.name.trim() });
      onOpenChange(false);
    } catch (error) {
      toast.error("Failed to update lead. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open, onOpenChange: (nextOpen) => !isSubmitting && onOpenChange(nextOpen), children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { className: "max-w-2xl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogHeader, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { className: "text-xl", children: "Edit Lead" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(DialogDescription, { children: "Update the lead details and save your changes." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: submit, className: "grid gap-4 sm:grid-cols-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5 sm:col-span-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "edit-name", children: "Full Name *" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "edit-name", value: form.name, onChange: (e) => setForm({ ...form, name: e.target.value }), disabled: isSubmitting }),
        errors.name && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-destructive", children: errors.name })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "edit-email", children: "Email *" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "edit-email", type: "email", value: form.email, onChange: (e) => setForm({ ...form, email: e.target.value }), disabled: isSubmitting }),
        errors.email && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-destructive", children: errors.email })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "edit-phone", children: "Phone" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "edit-phone", value: form.phone, onChange: (e) => setForm({ ...form, phone: e.target.value }), disabled: isSubmitting })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "edit-company", children: "Company *" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "edit-company", value: form.company, onChange: (e) => setForm({ ...form, company: e.target.value }), disabled: isSubmitting }),
        errors.company && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-destructive", children: errors.company })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "edit-follow-up", children: "Follow-up Date" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "edit-follow-up", type: "date", value: form.followUpDate, onChange: (e) => setForm({ ...form, followUpDate: e.target.value }), disabled: isSubmitting })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "edit-value", children: "Deal Value" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "edit-value", type: "number", min: "0", value: form.value, onChange: (e) => setForm({ ...form, value: Math.max(0, Number(e.target.value) || 0) }), disabled: isSubmitting })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Lead Source" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: form.source, onValueChange: (source) => setForm({ ...form, source }), disabled: isSubmitting, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: sources.map((source) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: source, children: source }, source)) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Lead Status" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: form.status, onValueChange: (status) => setForm({ ...form, status }), disabled: isSubmitting, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: statuses.map((status) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: status, children: status }, status)) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5 sm:col-span-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "edit-notes", children: "Notes" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Textarea, { id: "edit-notes", rows: 3, value: form.notes, onChange: (e) => setForm({ ...form, notes: e.target.value }), disabled: isSubmitting })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogFooter, { className: "sm:col-span-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "button", variant: "outline", onClick: () => onOpenChange(false), disabled: isSubmitting, children: "Cancel" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "submit", className: "gradient-primary text-primary-foreground shadow-glow", disabled: isSubmitting, children: isSubmitting ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "mr-2 h-4 w-4 animate-spin" }),
          " Saving..."
        ] }) : "Save Changes" })
      ] })
    ] })
  ] }) });
}
const PAGE_SIZE = 10;
function LeadsPage() {
  const {
    leads,
    loading,
    deleteLead
  } = useLeads();
  const [q, setQ] = reactExports.useState("");
  const [status, setStatus] = reactExports.useState("all");
  const [company, setCompany] = reactExports.useState("all");
  const [sort, setSort] = reactExports.useState("created");
  const [page, setPage] = reactExports.useState(1);
  const [addOpen, setAddOpen] = reactExports.useState(false);
  const [editingLead, setEditingLead] = reactExports.useState(null);
  const companies = reactExports.useMemo(() => Array.from(new Set(leads.map((l) => l.company))).filter(Boolean).sort(), [leads]);
  const filtered = reactExports.useMemo(() => {
    let r = leads;
    if (q) {
      const t = q.toLowerCase();
      r = r.filter((l) => l.name.toLowerCase().includes(t) || l.email.toLowerCase().includes(t) || l.company && l.company.toLowerCase().includes(t));
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
    const blob = new Blob([csv], {
      type: "text/csv"
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "leads.csv";
    a.click();
    URL.revokeObjectURL(url);
    toast.success("CSV exported");
  }
  if (loading && leads.length === 0) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(AppLayout, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex h-[50vh] flex-col items-center justify-center space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-8 w-8 animate-spin text-primary" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Loading leads..." })
    ] }) });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(AppLayout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-3xl font-bold tracking-tight", children: "Leads" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-1 text-sm text-muted-foreground", children: [
          filtered.length,
          " of ",
          leads.length,
          " leads"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: exportCSV, className: "inline-flex items-center gap-2 rounded-xl border border-input bg-card px-4 py-2.5 text-sm font-medium shadow-sm hover:bg-muted", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "h-4 w-4" }),
          " Export CSV"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setAddOpen(true), className: "inline-flex items-center gap-2 rounded-xl gradient-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground shadow-glow hover:scale-[1.02] transition-transform", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-4 w-4" }),
          " Add Lead"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 rounded-2xl border border-border bg-card shadow-soft", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-3 border-b border-border p-4 sm:flex-row sm:items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "search", value: q, onChange: (e) => {
            setQ(e.target.value);
            setPage(1);
          }, placeholder: "Search by name, email, or company...", className: "h-10 w-full rounded-xl border border-input bg-background pl-10 pr-4 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: status, onValueChange: (v) => {
            setStatus(v);
            setPage(1);
          }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectTrigger, { className: "h-10 w-[140px] rounded-xl", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Funnel, { className: "mr-1.5 h-3.5 w-3.5" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Status" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "all", children: "All statuses" }),
              ["New", "Contacted", "Qualified", "Converted", "Lost"].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: s, children: s }, s))
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: company, onValueChange: (v) => {
            setCompany(v);
            setPage(1);
          }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "h-10 w-[160px] rounded-xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Company" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "all", children: "All companies" }),
              companies.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: c, children: c }, c))
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: sort, onValueChange: (v) => setSort(v), children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "h-10 w-[150px] rounded-xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "created", children: "Newest first" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "name", children: "Name (A–Z)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "followup", children: "Follow-up date" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "value", children: "Deal value" })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden overflow-x-auto md:block", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-border bg-muted/30 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-5 py-3", children: "Name" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-5 py-3", children: "Company" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-5 py-3", children: "Contact" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-5 py-3", children: "Source" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-5 py-3", children: "Status" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-5 py-3", children: "Value" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-5 py-3", children: "Follow-up" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-5 py-3", children: "Created" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-5 py-3 text-right", children: "Actions" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: pageRows.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-border last:border-0 transition-colors hover:bg-muted/40", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-5 py-3.5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/leads/$id", params: {
            id: l._id
          }, className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-9 w-9 items-center justify-center rounded-full text-xs font-semibold text-white bg-primary", children: l.name.split(" ").map((n) => n[0]).join("").slice(0, 2) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-medium", children: l.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: l.email })
            ] })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-5 py-3.5 text-sm", children: l.company }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-5 py-3.5 text-sm text-muted-foreground", children: l.phone }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-5 py-3.5 text-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-md bg-muted px-2 py-0.5 text-xs font-medium", children: l.source }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-5 py-3.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(StatusBadge, { status: l.status }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-5 py-3.5 text-sm font-semibold text-success", children: formatCurrency(l.value) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-5 py-3.5 text-sm", children: formatDate(l.followUpDate) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-5 py-3.5 text-sm text-muted-foreground", children: formatDate(l.createdAt) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-5 py-3.5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-end gap-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/leads/$id", params: {
              id: l._id
            }, className: "rounded-lg p-1.5 text-muted-foreground hover:bg-muted hover:text-foreground", title: "View", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "h-4 w-4" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setEditingLead(l), className: "rounded-lg p-1.5 text-muted-foreground hover:bg-muted hover:text-foreground", title: "Edit", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Pencil, { className: "h-4 w-4" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => deleteLead(l._id), className: "rounded-lg p-1.5 text-muted-foreground hover:bg-destructive/10 hover:text-destructive", title: "Delete", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "h-4 w-4" }) })
          ] }) })
        ] }, l._id)) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3 p-4 md:hidden", children: pageRows.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border p-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/leads/$id", params: {
            id: l._id
          }, className: "flex min-w-0 flex-1 items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-10 w-10 items-center justify-center rounded-full text-sm font-semibold text-white bg-primary", children: l.name.split(" ").map((n) => n[0]).join("").slice(0, 2) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "truncate text-sm font-semibold", children: l.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "truncate text-xs text-muted-foreground", children: l.company })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(StatusBadge, { status: l.status }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setEditingLead(l), className: "rounded-lg p-1.5 text-muted-foreground hover:bg-muted hover:text-foreground", title: "Edit", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Pencil, { className: "h-4 w-4" }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 grid grid-cols-2 gap-2 text-xs text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "truncate", children: l.email }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right", children: [
            "Follow up ",
            formatDate(l.followUpDate)
          ] })
        ] })
      ] }, l._id)) }),
      filtered.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center justify-center px-6 py-16 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-16 w-16 items-center justify-center rounded-2xl bg-muted", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Inbox, { className: "h-8 w-8 text-muted-foreground" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-4 text-base font-semibold", children: "No leads match your filters" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: "Try adjusting your search or filters." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => {
          setQ("");
          setStatus("all");
          setCompany("all");
        }, className: "mt-4 text-sm font-medium text-primary hover:underline", children: "Clear filters" })
      ] }),
      filtered.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center justify-between gap-3 border-t border-border p-4 sm:flex-row", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-muted-foreground", children: [
          "Showing ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: (page - 1) * PAGE_SIZE + 1 }),
          "–",
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: Math.min(page * PAGE_SIZE, filtered.length) }),
          " of ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: filtered.length })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { disabled: page === 1, onClick: () => setPage((p) => Math.max(1, p - 1)), className: "rounded-lg border border-input p-1.5 disabled:opacity-40", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "h-4 w-4" }) }),
          Array.from({
            length: totalPages
          }).slice(0, 5).map((_, i) => {
            const p = i + 1;
            return /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setPage(p), className: cn("min-w-8 rounded-lg px-2 py-1 text-xs font-medium", page === p ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-muted"), children: p }, p);
          }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { disabled: page === totalPages, onClick: () => setPage((p) => Math.min(totalPages, p + 1)), className: "rounded-lg border border-input p-1.5 disabled:opacity-40", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "h-4 w-4" }) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AddLeadDialog, { open: addOpen, onOpenChange: setAddOpen }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(EditLeadDialog, { lead: editingLead, open: Boolean(editingLead), onOpenChange: (open) => {
      if (!open) setEditingLead(null);
    } })
  ] });
}
export {
  LeadsPage as component
};
