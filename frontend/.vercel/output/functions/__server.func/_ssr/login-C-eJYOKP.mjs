import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { d as useNavigate, L as Link } from "../_libs/tanstack__react-router.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { u as useAuth } from "./router-GXpQW7Bb.mjs";
import { a as Sparkles, f as Users, T as TrendingUp, g as Target, M as Mail, L as Lock, b as LoaderCircle, A as ArrowRight } from "../_libs/lucide-react.mjs";
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
function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = reactExports.useState("");
  const [password, setPassword] = reactExports.useState("");
  const [remember, setRemember] = reactExports.useState(true);
  const [submitting, setSubmitting] = reactExports.useState(false);
  const {
    login: authenticate,
    user
  } = useAuth();
  reactExports.useEffect(() => {
    if (user) navigate({
      to: "/",
      replace: true
    });
  }, [navigate, user]);
  async function login(e) {
    e.preventDefault();
    if (!email || !password) {
      toast.error("Please enter your email and password");
      return;
    }
    setSubmitting(true);
    try {
      await authenticate(email, password, remember);
      toast.success("Welcome back!");
      navigate({
        to: "/"
      });
    } catch (error) {
      toast.error(error.response?.data?.message || "Unable to sign in");
    } finally {
      setSubmitting(false);
    }
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid min-h-screen w-full lg:grid-cols-2", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative hidden overflow-hidden gradient-hero p-12 lg:flex lg:flex-col lg:justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 opacity-30", style: {
        backgroundImage: "radial-gradient(circle at 20% 20%, white 1px, transparent 1px), radial-gradient(circle at 80% 60%, white 1px, transparent 1px)",
        backgroundSize: "48px 48px, 64px 64px"
      } }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -right-32 -top-32 h-96 w-96 rounded-full bg-white/20 blur-3xl" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-primary-foreground/10 blur-3xl" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 flex items-center gap-3 text-primary-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-11 w-11 items-center justify-center rounded-2xl bg-white/15 backdrop-blur-sm ring-1 ring-white/30", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-6 w-6" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-lg font-bold tracking-tight", children: "LeadFlow" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "-mt-0.5 text-xs uppercase tracking-widest opacity-80", children: "CRM Suite" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 space-y-8 text-primary-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-4xl font-bold leading-tight tracking-tight xl:text-5xl", children: [
            "Turn every lead into",
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            "a closed deal."
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 max-w-md text-base opacity-90", children: "The modern CRM trusted by ambitious teams. Beautiful pipelines, smart follow-ups, real-time analytics." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 gap-3", children: [{
          icon: Users,
          label: "Lead Management",
          value: "Organized"
        }, {
          icon: TrendingUp,
          label: "Analytics",
          value: "Live"
        }, {
          icon: Target,
          label: "Follow-ups",
          value: "Tracked"
        }].map(({
          icon: Icon,
          label,
          value
        }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur-md", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-5 w-5 opacity-90" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 text-2xl font-bold", children: value }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs opacity-75", children: label })
        ] }, label)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-2xl border border-white/20 bg-white/10 p-5 text-sm backdrop-blur-md", children: "Secure JWT authentication, database-backed reporting, and responsive pipeline management in one workspace." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative z-10 text-xs text-primary-foreground/70", children: "© 2026 LeadFlow Inc. All rights reserved." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center bg-background p-6 sm:p-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full max-w-md animate-fade-in", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-8 lg:hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "gradient-primary flex h-10 w-10 items-center justify-center rounded-xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-5 w-5 text-primary-foreground" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-lg font-bold", children: "LeadFlow" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold tracking-tight", children: "Welcome back" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Sign in to your account to continue." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: login, className: "mt-8 space-y-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground transition-colors group-focus-within:text-primary" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "email", value: email, onChange: (e) => setEmail(e.target.value), placeholder: "Email address", className: "peer h-12 w-full rounded-xl border border-input bg-card pl-10 pr-3 text-sm shadow-sm transition placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { className: "absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground transition-colors group-focus-within:text-primary" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "password", value: password, onChange: (e) => setPassword(e.target.value), placeholder: "Password", className: "h-12 w-full rounded-xl border border-input bg-card pl-10 pr-3 text-sm shadow-sm transition placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex cursor-pointer items-center gap-2 text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "checkbox", checked: remember, onChange: (e) => setRemember(e.target.checked), className: "h-4 w-4 rounded border-input text-primary focus:ring-primary" }),
            "Remember me"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", className: "font-medium text-primary hover:underline", children: "Forgot password?" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "submit", disabled: submitting, className: "group flex h-12 w-full items-center justify-center gap-2 rounded-xl gradient-primary text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-[1.01] disabled:opacity-60", children: submitting ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-4 w-4 animate-spin" }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          "Sign in ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-0.5" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative my-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 flex items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full border-t border-border" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative flex justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-background px-3 text-xs uppercase tracking-wider text-muted-foreground", children: "or continue with" }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", disabled: true, className: "flex h-12 w-full items-center justify-center gap-3 rounded-xl border border-input bg-card text-sm font-medium opacity-50", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { className: "h-5 w-5", viewBox: "0 0 24 24", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("path", { fill: "#4285F4", d: "M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("path", { fill: "#34A853", d: "M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("path", { fill: "#FBBC05", d: "M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("path", { fill: "#EA4335", d: "M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" })
          ] }),
          "Google sign-in unavailable"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "pt-2 text-center text-sm text-muted-foreground", children: [
          "Don't have an account?",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/register", className: "font-semibold text-primary hover:underline", children: "Sign up free" })
        ] })
      ] })
    ] }) })
  ] });
}
export {
  LoginPage as component
};
