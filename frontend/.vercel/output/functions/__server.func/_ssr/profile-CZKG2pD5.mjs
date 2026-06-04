import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { A as AppLayout } from "./app-layout-RVqOMfVp.mjs";
import { B as Button, L as Label, I as Input } from "./label-DVLk335W.mjs";
import { u as useAuth } from "./router-GXpQW7Bb.mjs";
import { c as UserRound, M as Mail, d as Phone, e as Save } from "../_libs/lucide-react.mjs";
import "../_libs/react-dom.mjs";
import "crypto";
import "async_hooks";
import "util";
import "stream";
import "../_libs/tanstack__react-router.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
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
import "../_libs/class-variance-authority.mjs";
import "../_libs/radix-ui__react-label.mjs";
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
function ProfilePage() {
  const {
    user,
    updateProfile
  } = useAuth();
  const [form, setForm] = reactExports.useState({
    name: "",
    jobTitle: "",
    phone: ""
  });
  const [saving, setSaving] = reactExports.useState(false);
  reactExports.useEffect(() => {
    if (user) setForm({
      name: user.name,
      jobTitle: user.jobTitle || "",
      phone: user.phone || ""
    });
  }, [user]);
  async function save() {
    setSaving(true);
    try {
      await updateProfile(form);
      toast.success("Profile updated");
    } catch (error) {
      toast.error(error.response?.data?.message || "Unable to update profile");
    } finally {
      setSaving(false);
    }
  }
  const initials = user?.name.split(" ").map((part) => part[0]).join("").slice(0, 2).toUpperCase();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(AppLayout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-3xl font-bold tracking-tight", children: "Profile" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: "Manage your personal account information." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 max-w-3xl rounded-2xl border border-border bg-card p-6 shadow-soft", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6 flex items-center gap-4 border-b border-border pb-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "gradient-primary flex h-20 w-20 items-center justify-center rounded-2xl text-2xl font-bold text-primary-foreground", children: initials || /* @__PURE__ */ jsxRuntimeExports.jsx(UserRound, {}) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold", children: user?.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 text-sm text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-3.5 w-3.5" }),
            user?.email
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 sm:grid-cols-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Full name", value: form.name, onChange: (name) => setForm({
          ...form,
          name
        }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Job title", value: form.jobTitle, onChange: (jobTitle) => setForm({
          ...form,
          jobTitle
        }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Phone", value: form.phone, onChange: (phone) => setForm({
          ...form,
          phone
        }), icon: Phone }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Email", value: user?.email || "", disabled: true, icon: Mail })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 flex justify-end", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { disabled: saving, onClick: save, className: "gradient-primary text-primary-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Save, { className: "mr-2 h-4 w-4" }),
        "Save profile"
      ] }) })
    ] })
  ] });
}
function Field({
  label,
  icon: Icon,
  onChange,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
      Icon && /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { ...props, onChange: (event) => onChange?.(event.target.value), className: Icon ? "pl-9" : "" })
    ] })
  ] });
}
export {
  ProfilePage as component
};
