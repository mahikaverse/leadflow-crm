import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { A as AppLayout, c as cn } from "./app-layout-RVqOMfVp.mjs";
import { B as Button, L as Label, I as Input } from "./label-DVLk335W.mjs";
import { R as Root, T as Thumb } from "../_libs/radix-ui__react-switch.mjs";
import { u as useAuth, a as useTheme } from "./router-GXpQW7Bb.mjs";
import { U as User, B as Bell, P as Palette, S as Shield } from "../_libs/lucide-react.mjs";
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
import "../_libs/radix-ui__react-use-previous.mjs";
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
const Switch = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Root,
  {
    className: cn(
      "peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
      className
    ),
    ...props,
    ref,
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Thumb,
      {
        className: cn(
          "pointer-events-none block h-4 w-4 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0"
        )
      }
    )
  }
));
Switch.displayName = Root.displayName;
const tabs = [{
  id: "profile",
  label: "Profile",
  icon: User
}, {
  id: "notifications",
  label: "Notifications",
  icon: Bell
}, {
  id: "appearance",
  label: "Appearance",
  icon: Palette
}, {
  id: "account",
  label: "Account",
  icon: Shield
}];
function SettingsPage() {
  const {
    user,
    updateProfile
  } = useAuth();
  const {
    theme,
    toggle
  } = useTheme();
  const [active, setActive] = reactExports.useState("profile");
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
  async function save(data) {
    setSaving(true);
    try {
      await updateProfile(data);
      toast.success("Settings updated");
    } catch (error) {
      toast.error(error.response?.data?.message || "Unable to save settings");
    } finally {
      setSaving(false);
    }
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(AppLayout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-3xl font-bold tracking-tight", children: "Settings" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: "Manage your account preferences and profile." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 grid gap-6 lg:grid-cols-[220px_1fr]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "space-y-1", children: tabs.map((tab) => /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setActive(tab.id), className: cn("flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium", active === tab.id ? "bg-accent" : "text-muted-foreground hover:bg-muted"), children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(tab.icon, { className: "h-4 w-4" }),
        tab.label
      ] }, tab.id)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border bg-card p-6 shadow-soft", children: [
        active === "profile" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Title, { title: "Profile", subtitle: "Your personal information." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 sm:grid-cols-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Full name", value: form.name, onChange: (name) => setForm({
              ...form,
              name
            }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Email", value: user?.email || "", disabled: true }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Job title", value: form.jobTitle, onChange: (jobTitle) => setForm({
              ...form,
              jobTitle
            }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Phone", value: form.phone, onChange: (phone) => setForm({
              ...form,
              phone
            }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-end", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { disabled: saving, onClick: () => save(form), className: "gradient-primary text-primary-foreground", children: "Save changes" }) })
        ] }),
        active === "notifications" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Title, { title: "Notifications", subtitle: "Choose how LeadFlow keeps you informed." }),
          Object.entries(user?.preferences || {}).map(([key, value]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between rounded-xl border border-border p-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium", children: key.replace(/([A-Z])/g, " $1") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Switch, { checked: value, onCheckedChange: (checked) => save({
              preferences: {
                ...user.preferences,
                [key]: checked
              }
            }) })
          ] }, key))
        ] }),
        active === "appearance" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Title, { title: "Appearance", subtitle: "Switch between light and dark themes." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "outline", onClick: toggle, children: [
            "Use ",
            theme === "dark" ? "light" : "dark",
            " theme"
          ] })
        ] }),
        active === "account" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Title, { title: "Account", subtitle: "Your authenticated account details." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border p-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm font-medium", children: [
              "Signed in as ",
              user?.email
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-xs text-muted-foreground", children: "Passwords are securely hashed and API access is protected by JWT authentication." })
          ] })
        ] })
      ] })
    ] })
  ] });
}
function Title({
  title,
  subtitle
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-b border-border pb-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-lg font-semibold", children: title }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: subtitle })
  ] });
}
function Field({
  label,
  onChange,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { ...props, onChange: (event) => onChange?.(event.target.value) })
  ] });
}
export {
  SettingsPage as component
};
