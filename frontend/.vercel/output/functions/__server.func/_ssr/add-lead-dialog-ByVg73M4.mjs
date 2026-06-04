import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { R as Root, P as Portal, C as Content, a as Close, T as Title, D as Description, O as Overlay } from "../_libs/radix-ui__react-dialog.mjs";
import { c as cn } from "./app-layout-RVqOMfVp.mjs";
import { L as Label, I as Input, B as Button } from "./label-DVLk335W.mjs";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from "./select-WHAptX-z.mjs";
import { b as useLeads } from "./router-GXpQW7Bb.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { b as LoaderCircle, X } from "../_libs/lucide-react.mjs";
const Dialog = Root;
const DialogPortal = Portal;
const DialogOverlay = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Overlay,
  {
    ref,
    className: cn(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    ),
    ...props
  }
));
DialogOverlay.displayName = Overlay.displayName;
const DialogContent = reactExports.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogPortal, { children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx(DialogOverlay, {}),
  /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Content,
    {
      ref,
      className: cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:rounded-lg",
        className
      ),
      ...props,
      children: [
        children,
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Close, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background cursor-pointer transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-4 w-4" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
DialogContent.displayName = Content.displayName;
const DialogHeader = ({ className, ...props }) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("flex flex-col space-y-1.5 text-center sm:text-left", className), ...props });
DialogHeader.displayName = "DialogHeader";
const DialogFooter = ({ className, ...props }) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  "div",
  {
    className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
    ...props
  }
);
DialogFooter.displayName = "DialogFooter";
const DialogTitle = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Title,
  {
    ref,
    className: cn("text-lg font-semibold leading-none tracking-tight", className),
    ...props
  }
));
DialogTitle.displayName = Title.displayName;
const DialogDescription = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Description,
  {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props
  }
));
DialogDescription.displayName = Description.displayName;
const Textarea = reactExports.forwardRef(
  ({ className, ...props }, ref) => {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "textarea",
      {
        className: cn(
          "flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className
        ),
        ref,
        ...props
      }
    );
  }
);
Textarea.displayName = "Textarea";
const sources = ["Website", "Referral", "LinkedIn", "Cold Call", "Event", "Email Campaign"];
const statuses = ["New", "Contacted", "Qualified", "Converted", "Lost"];
function AddLeadDialog({ open, onOpenChange }) {
  const { addLead } = useLeads();
  const [isSubmitting, setIsSubmitting] = reactExports.useState(false);
  const [form, setForm] = reactExports.useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    source: "Website",
    status: "New",
    value: 0,
    notes: "",
    followUpDate: new Date(Date.now() + 7 * 864e5).toISOString().slice(0, 10)
  });
  const [errors, setErrors] = reactExports.useState({});
  async function submit(e) {
    e.preventDefault();
    const errs = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) errs.email = "Valid email required";
    if (!form.company.trim()) errs.company = "Company is required";
    setErrors(errs);
    if (Object.keys(errs).length) return;
    setIsSubmitting(true);
    try {
      await addLead({
        name: form.name.trim(),
        email: form.email.trim(),
        phone: form.phone.trim(),
        company: form.company.trim(),
        source: form.source,
        status: form.status,
        value: form.value,
        notes: form.notes.trim(),
        followUpDate: new Date(form.followUpDate).toISOString()
      });
      toast.success("Lead added successfully", { description: `${form.name} from ${form.company}` });
      onOpenChange(false);
      setForm({
        name: "",
        email: "",
        phone: "",
        company: "",
        source: "Website",
        status: "New",
        value: 0,
        notes: "",
        followUpDate: new Date(Date.now() + 7 * 864e5).toISOString().slice(0, 10)
      });
    } catch (error) {
      toast.error("Failed to add lead. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open, onOpenChange, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { className: "max-w-2xl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogHeader, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { className: "text-xl", children: "Add New Lead" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(DialogDescription, { children: "Capture a new lead to your pipeline. Fields marked with * are required." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: submit, className: "grid gap-4 sm:grid-cols-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5 sm:col-span-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "name", children: "Full Name *" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "name", value: form.name, onChange: (e) => setForm({ ...form, name: e.target.value }), placeholder: "Jane Cooper", disabled: isSubmitting }),
        errors.name && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-destructive", children: errors.name })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "email", children: "Email *" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "email", type: "email", value: form.email, onChange: (e) => setForm({ ...form, email: e.target.value }), placeholder: "jane@acme.com", disabled: isSubmitting }),
        errors.email && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-destructive", children: errors.email })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "phone", children: "Phone" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "phone", value: form.phone, onChange: (e) => setForm({ ...form, phone: e.target.value }), placeholder: "+1 (555) 000-0000", disabled: isSubmitting })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "company", children: "Company *" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "company", value: form.company, onChange: (e) => setForm({ ...form, company: e.target.value }), placeholder: "Acme Corp", disabled: isSubmitting }),
        errors.company && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-destructive", children: errors.company })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "value", children: "Deal Value ($)" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            id: "value",
            type: "number",
            value: form.value,
            min: "0",
            onChange: (e) => setForm({
              ...form,
              value: Math.max(0, Number(e.target.value) || 0)
            }),
            placeholder: "5000"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Follow-up Date" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "date", value: form.followUpDate, onChange: (e) => setForm({ ...form, followUpDate: e.target.value }), disabled: isSubmitting })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Lead Source" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: form.source, onValueChange: (v) => setForm({ ...form, source: v }), disabled: isSubmitting, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: sources.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: s, children: s }, s)) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Lead Status" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: form.status, onValueChange: (v) => setForm({ ...form, status: v }), disabled: isSubmitting, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: statuses.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: s, children: s }, s)) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5 sm:col-span-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Notes (Initial)" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Textarea, { rows: 3, value: form.notes, onChange: (e) => setForm({ ...form, notes: e.target.value }), placeholder: "Initial conversation, interests, next steps...", disabled: isSubmitting })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogFooter, { className: "sm:col-span-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "button", variant: "outline", onClick: () => onOpenChange(false), disabled: isSubmitting, children: "Cancel" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "submit", className: "gradient-primary text-primary-foreground shadow-glow", disabled: isSubmitting, children: isSubmitting ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "mr-2 h-4 w-4 animate-spin" }),
          " Saving..."
        ] }) : "Save Lead" })
      ] })
    ] })
  ] }) });
}
export {
  AddLeadDialog as A,
  Dialog as D,
  Textarea as T,
  DialogContent as a,
  DialogHeader as b,
  DialogTitle as c,
  DialogDescription as d,
  DialogFooter as e
};
