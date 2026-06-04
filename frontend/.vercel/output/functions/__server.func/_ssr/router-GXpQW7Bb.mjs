import { Q as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { Q as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { c as createRouter, a as createRootRouteWithContext, u as useRouter, L as Link, O as Outlet, H as HeadContent, S as Scripts, b as createFileRoute, l as lazyRouteComponent } from "../_libs/tanstack__react-router.mjs";
import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { T as Toaster } from "../_libs/sonner.mjs";
import { a as axios } from "../_libs/axios.mjs";
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
const appCss = "/assets/styles-DqgvwyWn.css";
function reportLovableError(error, context = {}) {
  if (typeof window === "undefined") return;
  window.__lovableEvents?.captureException?.(
    error,
    {
      source: "react_error_boundary",
      route: window.location.pathname,
      ...context
    },
    {
      mechanism: "react_error_boundary",
      handled: false,
      severity: "error"
    }
  );
}
const ThemeContext = reactExports.createContext(null);
function ThemeProvider({ children }) {
  const [theme, setTheme] = reactExports.useState("light");
  reactExports.useEffect(() => {
    const stored = typeof window !== "undefined" && localStorage.getItem("theme");
    const initial = stored ?? (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    setTheme(initial);
  }, []);
  reactExports.useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") root.classList.add("dark");
    else root.classList.remove("dark");
    try {
      localStorage.setItem("theme", theme);
    } catch {
    }
  }, [theme]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(ThemeContext.Provider, { value: { theme, toggle: () => setTheme((t) => t === "dark" ? "light" : "dark") }, children });
}
function useTheme() {
  const ctx = reactExports.useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used inside ThemeProvider");
  return ctx;
}
const TOKEN_KEY = "leadflow_token";
function getAuthToken() {
  if (typeof window === "undefined") return null;
  return localStorage.getItem(TOKEN_KEY) || sessionStorage.getItem(TOKEN_KEY);
}
const apiClient = axios.create({
  baseURL: `${"https://leadflow-crm-hm7v.onrender.com"}/api`,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json"
  }
});
apiClient.interceptors.request.use((config) => {
  const token = getAuthToken();
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});
apiClient.interceptors.response.use(void 0, (error) => {
  if (error.response?.status === 401 && typeof window !== "undefined" && window.location.pathname !== "/login" && window.location.pathname !== "/register") {
    localStorage.removeItem("leadflow_token");
    sessionStorage.removeItem("leadflow_token");
    window.location.assign("/login");
  }
  return Promise.reject(error);
});
function safeNumber(value) {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : 0;
}
function normalizeLead(lead) {
  return { ...lead, value: safeNumber(lead.value) };
}
function normalizeAnalytics(data) {
  return {
    ...data,
    totalLeads: safeNumber(data.totalLeads),
    activeLeads: safeNumber(data.activeLeads),
    convertedLeads: safeNumber(data.convertedLeads),
    lostLeads: safeNumber(data.lostLeads),
    conversionRate: safeNumber(data.conversionRate),
    pipelineValue: safeNumber(data.pipelineValue),
    averageDealSize: safeNumber(data.averageDealSize),
    followUps: safeNumber(data.followUps),
    completedFollowUps: safeNumber(data.completedFollowUps),
    overdueFollowUps: safeNumber(data.overdueFollowUps),
    statusDistribution: data.statusDistribution.map((row) => ({ ...row, value: safeNumber(row.value) })),
    sourcePerformance: data.sourcePerformance.map((row) => ({ ...row, leads: safeNumber(row.leads), converted: safeNumber(row.converted) })),
    monthlyGrowth: data.monthlyGrowth.map((row) => ({ ...row, leads: safeNumber(row.leads), converted: safeNumber(row.converted) })),
    topCompanies: data.topCompanies.map((row) => ({ ...row, count: safeNumber(row.count), value: safeNumber(row.value) }))
  };
}
const getLeads = async (params) => (await apiClient.get("/leads", { params })).data.map(normalizeLead);
const getLead = async (id) => normalizeLead((await apiClient.get(`/leads/${id}`)).data);
const createLead = async (lead) => normalizeLead((await apiClient.post("/leads", lead)).data);
const updateLead = async (id, lead) => normalizeLead((await apiClient.put(`/leads/${id}`, lead)).data);
const deleteLead = async (id) => (await apiClient.delete(`/leads/${id}`)).data;
const addNote = async (id, text) => normalizeLead((await apiClient.post(`/leads/${id}/notes`, { text })).data);
const deleteNote = async (id, noteId) => normalizeLead((await apiClient.delete(`/leads/${id}/notes/${noteId}`)).data);
const completeFollowUp = async (id) => normalizeLead((await apiClient.post(`/leads/${id}/complete-follow-up`)).data);
const getAnalytics = async () => normalizeAnalytics((await apiClient.get("/analytics")).data);
async function login(email, password) {
  return (await apiClient.post("/auth/login", { email, password })).data;
}
async function register(name, email, password) {
  return (await apiClient.post("/auth/register", { name, email, password })).data;
}
async function getProfile() {
  return (await apiClient.get("/auth/profile")).data;
}
async function updateProfile(data) {
  return (await apiClient.put("/auth/profile", data)).data;
}
const AuthContext = reactExports.createContext(null);
function AuthProvider({ children }) {
  const [user, setUser] = reactExports.useState(null);
  const [loading, setLoading] = reactExports.useState(true);
  reactExports.useEffect(() => {
    const token = getAuthToken();
    if (!token) {
      setLoading(false);
      return;
    }
    getProfile().then(setUser).catch(() => {
      localStorage.removeItem(TOKEN_KEY);
      sessionStorage.removeItem(TOKEN_KEY);
    }).finally(() => setLoading(false));
  }, []);
  const value = reactExports.useMemo(() => ({
    user,
    loading,
    login: async (email, password, remember = true) => {
      const result = await login(email, password);
      const storage = remember ? localStorage : sessionStorage;
      storage.setItem(TOKEN_KEY, result.token);
      setUser(result.user);
    },
    register: async (name, email, password) => {
      const result = await register(name, email, password);
      localStorage.setItem(TOKEN_KEY, result.token);
      setUser(result.user);
    },
    logout: () => {
      localStorage.removeItem(TOKEN_KEY);
      sessionStorage.removeItem(TOKEN_KEY);
      setUser(null);
    },
    updateProfile: async (data) => setUser(await updateProfile(data))
  }), [user, loading]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AuthContext.Provider, { value, children });
}
function useAuth() {
  const context = reactExports.useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used inside AuthProvider");
  return context;
}
const LeadsContext = reactExports.createContext(null);
function LeadsProvider({ children }) {
  const { user, loading: authLoading } = useAuth();
  const [leads, setLeads] = reactExports.useState([]);
  const [loading, setLoading] = reactExports.useState(false);
  const [error, setError] = reactExports.useState(null);
  const refreshLeads = reactExports.useCallback(async () => {
    if (!user) {
      setLeads([]);
      return;
    }
    setLoading(true);
    try {
      setLeads(await getLeads());
      setError(null);
    } catch (err) {
      setError(err.response?.data?.message || err.message || "Failed to fetch leads");
    } finally {
      setLoading(false);
    }
  }, [user]);
  reactExports.useEffect(() => {
    if (!authLoading) refreshLeads();
  }, [authLoading, refreshLeads]);
  const mutate = reactExports.useCallback(async (action) => {
    await action();
    await refreshLeads();
  }, [refreshLeads]);
  const value = reactExports.useMemo(() => ({
    leads,
    loading,
    error,
    refreshLeads,
    getLead: async (id) => {
      try {
        return await getLead(id);
      } catch {
        return void 0;
      }
    },
    addLead: (data) => mutate(() => createLead(data)),
    updateLead: (id, data) => mutate(() => updateLead(id, data)),
    deleteLead: (id) => mutate(() => deleteLead(id)),
    updateLeadStatus: (id, status) => mutate(() => updateLead(id, { status })),
    addNote: (id, text) => mutate(() => addNote(id, text)),
    deleteNote: (id, noteId) => mutate(() => deleteNote(id, noteId)),
    completeFollowUp: (id) => mutate(() => completeFollowUp(id))
  }), [error, leads, loading, mutate, refreshLeads]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(LeadsContext.Provider, { value, children });
}
function useLeads() {
  const context = reactExports.useContext(LeadsContext);
  if (!context) throw new Error("useLeads must be used inside LeadsProvider");
  return context;
}
function NotFoundComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-7xl font-bold text-gradient", children: "404" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-xl font-semibold text-foreground", children: "Page not found" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "The page you're looking for doesn't exist or has been moved." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        to: "/",
        className: "inline-flex items-center justify-center rounded-xl gradient-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-glow",
        children: "Back to Dashboard"
      }
    ) })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router2 = useRouter();
  reactExports.useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-semibold tracking-tight text-foreground", children: "Something went wrong" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Try refreshing or head back home." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => {
            router2.invalidate();
            reset();
          },
          className: "rounded-xl gradient-primary px-4 py-2 text-sm font-medium text-primary-foreground",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/", className: "rounded-xl border border-input bg-card px-4 py-2 text-sm font-medium", children: "Go home" })
    ] })
  ] }) });
}
const Route$a = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "LeadFlow CRM — Modern Lead Management" },
      { name: "description", content: "Premium SaaS CRM to capture, track, and convert leads with beautiful dashboards, Kanban pipelines, and follow-up automation." },
      { property: "og:title", content: "LeadFlow CRM" },
      { property: "og:description", content: "Premium SaaS CRM for lead management." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" }
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" },
      { rel: "stylesheet", href: appCss }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("head", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$a.useRouteContext();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsxRuntimeExports.jsx(ThemeProvider, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(AuthProvider, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(LeadsProvider, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Toaster, { position: "top-right", richColors: true, closeButton: true })
  ] }) }) }) });
}
const $$splitComponentImporter$9 = () => import("./settings-Dt8VJps8.mjs");
const Route$9 = createFileRoute("/settings")({
  head: () => ({
    meta: [{
      title: "Settings - LeadFlow CRM"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
const $$splitComponentImporter$8 = () => import("./register-BhSoB-Hc.mjs");
const Route$8 = createFileRoute("/register")({
  head: () => ({
    meta: [{
      title: "Create account - LeadFlow CRM"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
const $$splitComponentImporter$7 = () => import("./profile-CZKG2pD5.mjs");
const Route$7 = createFileRoute("/profile")({
  head: () => ({
    meta: [{
      title: "Profile - LeadFlow CRM"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
const $$splitComponentImporter$6 = () => import("./login-C-eJYOKP.mjs");
const Route$6 = createFileRoute("/login")({
  head: () => ({
    meta: [{
      title: "Sign in — LeadFlow CRM"
    }, {
      name: "description",
      content: "Sign in to LeadFlow CRM to manage your leads, pipelines, and follow-ups."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
const $$splitComponentImporter$5 = () => import("./leads-O2Fj-jsw.mjs");
const Route$5 = createFileRoute("/leads")({
  head: () => ({
    meta: [{
      title: "Leads — LeadFlow CRM"
    }, {
      name: "description",
      content: "Search, filter, and manage all your leads in one place."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const $$splitComponentImporter$4 = () => import("./kanban-QZZpvktK.mjs");
const Route$4 = createFileRoute("/kanban")({
  head: () => ({
    meta: [{
      title: "Kanban — LeadFlow CRM"
    }, {
      name: "description",
      content: "Drag and drop leads through your pipeline stages."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./followups-Bitm6c6w.mjs");
const Route$3 = createFileRoute("/followups")({
  head: () => ({
    meta: [{
      title: "Follow-ups — LeadFlow CRM"
    }, {
      name: "description",
      content: "Stay on top of overdue, due-today, and upcoming follow-ups."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./analytics-DgMnQGG7.mjs");
const Route$2 = createFileRoute("/analytics")({
  head: () => ({
    meta: [{
      title: "Analytics - LeadFlow CRM"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./index-Cxtg_f6e.mjs");
const Route$1 = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: "Dashboard - LeadFlow CRM"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("./leads._id-G7CP6Nhz.mjs");
const Route = createFileRoute("/leads/$id")({
  head: ({
    params
  }) => ({
    meta: [{
      title: `Lead details — LeadFlow CRM`
    }, {
      name: "description",
      content: `Lead profile for ${params.id}`
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const SettingsRoute = Route$9.update({
  id: "/settings",
  path: "/settings",
  getParentRoute: () => Route$a
});
const RegisterRoute = Route$8.update({
  id: "/register",
  path: "/register",
  getParentRoute: () => Route$a
});
const ProfileRoute = Route$7.update({
  id: "/profile",
  path: "/profile",
  getParentRoute: () => Route$a
});
const LoginRoute = Route$6.update({
  id: "/login",
  path: "/login",
  getParentRoute: () => Route$a
});
const LeadsRoute = Route$5.update({
  id: "/leads",
  path: "/leads",
  getParentRoute: () => Route$a
});
const KanbanRoute = Route$4.update({
  id: "/kanban",
  path: "/kanban",
  getParentRoute: () => Route$a
});
const FollowupsRoute = Route$3.update({
  id: "/followups",
  path: "/followups",
  getParentRoute: () => Route$a
});
const AnalyticsRoute = Route$2.update({
  id: "/analytics",
  path: "/analytics",
  getParentRoute: () => Route$a
});
const IndexRoute = Route$1.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$a
});
const LeadsIdRoute = Route.update({
  id: "/$id",
  path: "/$id",
  getParentRoute: () => LeadsRoute
});
const LeadsRouteChildren = {
  LeadsIdRoute
};
const LeadsRouteWithChildren = LeadsRoute._addFileChildren(LeadsRouteChildren);
const rootRouteChildren = {
  IndexRoute,
  AnalyticsRoute,
  FollowupsRoute,
  KanbanRoute,
  LeadsRoute: LeadsRouteWithChildren,
  LoginRoute,
  ProfileRoute,
  RegisterRoute,
  SettingsRoute
};
const routeTree = Route$a._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router2 = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  Route as R,
  useTheme as a,
  useLeads as b,
  getAnalytics as g,
  router as r,
  useAuth as u
};
