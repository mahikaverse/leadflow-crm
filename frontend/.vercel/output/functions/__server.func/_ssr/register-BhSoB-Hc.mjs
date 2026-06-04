import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { d as useNavigate, L as Link } from "../_libs/tanstack__react-router.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { u as useAuth } from "./router-GXpQW7Bb.mjs";
import { a as Sparkles, U as User, M as Mail, L as Lock, b as LoaderCircle, A as ArrowRight } from "../_libs/lucide-react.mjs";
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
function RegisterPage() {
  const navigate = useNavigate();
  const {
    register
  } = useAuth();
  const [form, setForm] = reactExports.useState({
    name: "",
    email: "",
    password: ""
  });
  const [submitting, setSubmitting] = reactExports.useState(false);
  async function submit(event) {
    event.preventDefault();
    if (!form.name.trim() || !form.email.trim() || form.password.length < 8) {
      toast.error("Enter your name, email, and an 8+ character password");
      return;
    }
    setSubmitting(true);
    try {
      await register(form.name, form.email, form.password);
      toast.success("Account created");
      navigate({
        to: "/"
      });
    } catch (error) {
      toast.error(error.response?.data?.message || "Unable to create account");
    } finally {
      setSubmitting(false);
    }
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background p-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full max-w-md", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-8 flex items-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "gradient-primary flex h-10 w-10 items-center justify-center rounded-xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-5 w-5 text-primary-foreground" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-lg font-bold", children: "LeadFlow" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-3xl font-bold tracking-tight", children: "Create your account" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Start managing your pipeline with real-time CRM data." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: submit, className: "mt-8 space-y-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(AuthField, { icon: User, placeholder: "Full name", value: form.name, onChange: (name) => setForm({
        ...form,
        name
      }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(AuthField, { icon: Mail, type: "email", placeholder: "Email address", value: form.email, onChange: (email) => setForm({
        ...form,
        email
      }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(AuthField, { icon: Lock, type: "password", placeholder: "Password (8+ characters)", value: form.password, onChange: (password) => setForm({
        ...form,
        password
      }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { disabled: submitting, className: "flex h-12 w-full items-center justify-center gap-2 rounded-xl gradient-primary text-sm font-semibold text-primary-foreground shadow-glow disabled:opacity-60", children: submitting ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-4 w-4 animate-spin" }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        "Create account ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-6 text-center text-sm text-muted-foreground", children: [
      "Already have an account? ",
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/login", className: "font-semibold text-primary hover:underline", children: "Sign in" })
    ] })
  ] }) });
}
function AuthField({
  icon: Icon,
  onChange,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("input", { ...props, onChange: (event) => onChange(event.target.value), className: "h-12 w-full rounded-xl border border-input bg-card pl-10 pr-3 text-sm shadow-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20" })
  ] });
}
export {
  RegisterPage as component
};
