import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { e as useRouterState, d as useNavigate, L as Link } from "../_libs/tanstack__react-router.mjs";
import { c as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { u as useAuth, b as useLeads, a as useTheme } from "./router-GXpQW7Bb.mjs";
import { R as Root2, T as Trigger, P as Portal2, C as Content2, L as Label2, S as Separator2, I as Item2, a as SubTrigger2, b as SubContent2, c as CheckboxItem2, d as ItemIndicator2, e as RadioItem2 } from "../_libs/radix-ui__react-dropdown-menu.mjs";
import { b as LoaderCircle, H as LayoutDashboard, f as Users, K as Kanban, B as Bell, a as Sparkles, J as Menu, X, N as ChartColumn, O as Settings, Q as LogOut, i as Search, V as Sun, W as Moon, x as ChevronDown, l as ChevronRight, y as Check, Y as Circle } from "../_libs/lucide-react.mjs";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const nav = [
  { to: "/", label: "Dashboard", icon: LayoutDashboard },
  { to: "/leads", label: "Leads", icon: Users },
  { to: "/kanban", label: "Kanban Board", icon: Kanban },
  { to: "/analytics", label: "Analytics", icon: ChartColumn },
  { to: "/followups", label: "Follow Ups", icon: Bell },
  { to: "/settings", label: "Settings", icon: Settings }
];
function Sidebar({
  open,
  onClose,
  collapsed,
  setCollapsed
}) {
  const path = useRouterState({
    select: (s) => s.location.pathname
  });
  const navigate = useNavigate();
  const { logout } = useAuth();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    open && /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "fixed inset-0 z-40 bg-black/20 backdrop-blur-sm lg:hidden",
        onClick: onClose
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "aside",
      {
        className: cn(
          "fixed inset-y-0 left-0 z-50 border-r border-sidebar-border bg-sidebar transition-all duration-300 ease-in-out lg:translate-x-0",
          collapsed ? "w-20" : "w-72",
          open ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        ),
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex h-full flex-col", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: cn(
                "flex items-center py-5",
                collapsed ? "justify-center px-2" : "justify-between px-6"
              ),
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Link,
                  {
                    to: "/",
                    className: cn(
                      "flex items-center",
                      collapsed ? "justify-center" : "gap-2.5"
                    ),
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "gradient-primary flex h-9 w-9 items-center justify-center rounded-xl shadow-glow", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-5 w-5 text-primary-foreground" }) }),
                      !collapsed && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-base font-bold tracking-tight text-sidebar-foreground", children: "LeadFlow" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "-mt-0.5 text-[11px] font-medium uppercase tracking-wider text-muted-foreground", children: "CRM Suite" })
                      ] })
                    ]
                  }
                ),
                !collapsed && /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    onClick: () => setCollapsed(true),
                    className: "hidden lg:flex rounded-lg p-2 hover:bg-sidebar-accent",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { className: "h-5 w-5" })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    onClick: onClose,
                    className: "rounded-lg p-1.5 text-muted-foreground hover:bg-sidebar-accent lg:hidden",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-5 w-5" })
                  }
                )
              ]
            }
          ),
          collapsed && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden lg:flex justify-center pb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => setCollapsed(false),
              className: "rounded-lg p-2 hover:bg-sidebar-accent",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { className: "h-5 w-5" })
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "flex-1 space-y-1 px-3 py-2", children: nav.map((item) => {
            const active = item.to === "/" ? path === "/" : path.startsWith(item.to);
            const Icon = item.icon;
            return /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Link,
              {
                to: item.to,
                onClick: onClose,
                title: collapsed ? item.label : "",
                className: cn(
                  "group flex items-center rounded-xl px-3 py-2.5 text-sm font-medium transition-all",
                  collapsed ? "justify-center" : "gap-3",
                  active ? "bg-sidebar-accent text-sidebar-accent-foreground shadow-sm" : "text-sidebar-foreground/80 hover:bg-sidebar-accent/60 hover:text-sidebar-foreground"
                ),
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Icon,
                    {
                      className: cn(
                        "h-[18px] w-[18px] transition-transform group-hover:scale-110",
                        active && "text-primary"
                      )
                    }
                  ),
                  !collapsed && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: item.label }),
                  active && !collapsed && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-auto h-1.5 w-1.5 rounded-full bg-primary" })
                ]
              },
              item.to
            );
          }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-sidebar-border p-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                onClick: () => {
                  logout();
                  navigate({ to: "/login" });
                },
                className: cn(
                  "flex w-full items-center rounded-xl px-3 py-2.5 text-sm font-medium transition-colors hover:bg-destructive/10 hover:text-destructive",
                  collapsed ? "justify-center" : "gap-3"
                ),
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(LogOut, { className: "h-[18px] w-[18px]" }),
                  !collapsed && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Logout" })
                ]
              }
            ),
            !collapsed && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 rounded-2xl border border-sidebar-border bg-gradient-to-br from-accent to-sidebar-accent p-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-semibold text-sidebar-accent-foreground", children: "Pro Tip ✨" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs text-muted-foreground", children: "Drag leads on the Kanban board to update status instantly." })
            ] })
          ] })
        ] })
      }
    )
  ] });
}
const DropdownMenu = Root2;
const DropdownMenuTrigger = Trigger;
const DropdownMenuSubTrigger = reactExports.forwardRef(({ className, inset, children, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
  SubTrigger2,
  {
    ref,
    className: cn(
      "flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
      inset && "pl-8",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "ml-auto" })
    ]
  }
));
DropdownMenuSubTrigger.displayName = SubTrigger2.displayName;
const DropdownMenuSubContent = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  SubContent2,
  {
    ref,
    className: cn(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-dropdown-menu-content-transform-origin)",
      className
    ),
    ...props
  }
));
DropdownMenuSubContent.displayName = SubContent2.displayName;
const DropdownMenuContent = reactExports.forwardRef(({ className, sideOffset = 4, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(Portal2, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
  Content2,
  {
    ref,
    sideOffset,
    className: cn(
      "z-50 max-h-[var(--radix-dropdown-menu-content-available-height)] min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md",
      "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-dropdown-menu-content-transform-origin)",
      className
    ),
    ...props
  }
) }));
DropdownMenuContent.displayName = Content2.displayName;
const DropdownMenuItem = reactExports.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Item2,
  {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&>svg]:size-4 [&>svg]:shrink-0",
      inset && "pl-8",
      className
    ),
    ...props
  }
));
DropdownMenuItem.displayName = Item2.displayName;
const DropdownMenuCheckboxItem = reactExports.forwardRef(({ className, children, checked, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
  CheckboxItem2,
  {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    ),
    checked,
    ...props,
    children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ItemIndicator2, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-4 w-4" }) }) }),
      children
    ]
  }
));
DropdownMenuCheckboxItem.displayName = CheckboxItem2.displayName;
const DropdownMenuRadioItem = reactExports.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
  RadioItem2,
  {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    ),
    ...props,
    children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ItemIndicator2, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Circle, { className: "h-2 w-2 fill-current" }) }) }),
      children
    ]
  }
));
DropdownMenuRadioItem.displayName = RadioItem2.displayName;
const DropdownMenuLabel = reactExports.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Label2,
  {
    ref,
    className: cn("px-2 py-1.5 text-sm font-semibold", inset && "pl-8", className),
    ...props
  }
));
DropdownMenuLabel.displayName = Label2.displayName;
const DropdownMenuSeparator = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Separator2,
  {
    ref,
    className: cn("-mx-1 my-1 h-px bg-muted", className),
    ...props
  }
));
DropdownMenuSeparator.displayName = Separator2.displayName;
function Topbar({ onMenu }) {
  const { theme, toggle } = useTheme();
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const { leads } = useLeads();
  const pendingFollowUps = leads.filter((lead) => lead.followUpDate && !lead.followUpCompletedAt).length;
  const initials = user?.name.split(" ").map((part) => part[0]).join("").slice(0, 2).toUpperCase() || "U";
  return /* @__PURE__ */ jsxRuntimeExports.jsx("header", { className: "sticky top-0 z-30 border-b border-border/60 bg-background/70 backdrop-blur-xl", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex h-16 items-center gap-3 px-4 sm:px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: onMenu, className: "rounded-lg p-2 text-muted-foreground hover:bg-muted lg:hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { className: "h-5 w-5" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex-1 max-w-md", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "input",
        {
          type: "search",
          placeholder: "Search leads, companies, contacts...",
          className: "h-10 w-full rounded-xl border border-input bg-card pl-10 pr-4 text-sm shadow-sm transition-shadow placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ml-auto flex items-center gap-1.5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "relative rounded-xl p-2.5 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Bell, { className: "h-[18px] w-[18px]" }),
        pendingFollowUps > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute right-1 top-1 min-w-4 rounded-full bg-destructive px-1 text-center text-[9px] font-bold text-white ring-2 ring-background", children: Math.min(pendingFollowUps, 99) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: toggle,
          className: "rounded-xl p-2.5 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground",
          "aria-label": "Toggle theme",
          children: theme === "dark" ? /* @__PURE__ */ jsxRuntimeExports.jsx(Sun, { className: "h-[18px] w-[18px]" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Moon, { className: "h-[18px] w-[18px]" })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownMenu, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownMenuTrigger, { className: "ml-1 flex items-center gap-2 rounded-xl border border-border bg-card p-1 pr-2.5 text-sm transition-shadow hover:shadow-md focus:outline-none", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "gradient-primary flex h-7 w-7 items-center justify-center rounded-lg text-xs font-semibold text-primary-foreground", children: initials }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden font-medium sm:inline", children: user?.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "h-3.5 w-3.5 text-muted-foreground" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownMenuContent, { align: "end", className: "w-56", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownMenuLabel, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-medium", children: user?.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-normal text-muted-foreground", children: user?.email })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownMenuSeparator, {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownMenuItem, { onClick: () => navigate({ to: "/profile" }), children: "Profile Settings" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownMenuItem, { onClick: () => navigate({ to: "/settings" }), children: "Preferences" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownMenuSeparator, {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownMenuItem, { onClick: () => {
            logout();
            navigate({ to: "/login" });
          }, className: "text-destructive focus:text-destructive", children: "Log out" })
        ] })
      ] })
    ] })
  ] }) });
}
function AppLayout({ children }) {
  const [open, setOpen] = reactExports.useState(false);
  const [collapsed, setCollapsed] = reactExports.useState(false);
  const path = useRouterState({ select: (s) => s.location.pathname });
  const navigate = useNavigate();
  const { user, loading } = useAuth();
  const { error } = useLeads();
  reactExports.useEffect(() => {
    if (!loading && !user) navigate({ to: "/login", replace: true });
  }, [loading, navigate, user]);
  if (loading || !user) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-8 w-8 animate-spin text-primary" }) });
  }
  const mobileNav = [
    { to: "/", label: "Home", icon: LayoutDashboard },
    { to: "/leads", label: "Leads", icon: Users },
    { to: "/kanban", label: "Board", icon: Kanban },
    { to: "/followups", label: "Tasks", icon: Bell }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex min-h-screen w-full bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Sidebar,
      {
        open,
        onClose: () => setOpen(false),
        collapsed,
        setCollapsed
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: cn(
          "flex min-w-0 flex-1 flex-col transition-all duration-300",
          collapsed ? "lg:ml-20" : "lg:ml-72"
        ),
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Topbar, { onMenu: () => setOpen(true) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "flex-1 px-4 pb-24 pt-6 sm:px-6 lg:pb-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto w-full max-w-[1400px] animate-fade-in", children: [
            error && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-4 rounded-xl border border-destructive/30 bg-destructive/5 p-3 text-sm text-destructive", children: error }),
            children
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "fixed bottom-0 left-0 right-0 z-30 border-t border-border bg-background/95 backdrop-blur-xl lg:hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-4", children: mobileNav.map((item) => {
            const active = item.to === "/" ? path === "/" : path.startsWith(item.to);
            const Icon = item.icon;
            return /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Link,
              {
                to: item.to,
                className: cn(
                  "flex flex-col items-center gap-1 py-3 text-[11px] font-medium transition-colors",
                  active ? "text-primary" : "text-muted-foreground"
                ),
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-5 w-5" }),
                  item.label
                ]
              },
              item.to
            );
          }) }) })
        ]
      }
    )
  ] });
}
export {
  AppLayout as A,
  cn as c
};
