
import { Link, useRouterState, useNavigate } from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  Users,
  Kanban,
  BarChart3,
  Bell,
  Settings,
  LogOut,
  Sparkles,
  X,
  Menu,
} from "lucide-react";
import { useAuth } from "@/lib/auth-store";

const nav = [
  { to: "/", label: "Dashboard", icon: LayoutDashboard },
  { to: "/leads", label: "Leads", icon: Users },
  { to: "/kanban", label: "Kanban Board", icon: Kanban },
  { to: "/analytics", label: "Analytics", icon: BarChart3 },
  { to: "/followups", label: "Follow Ups", icon: Bell },
  { to: "/settings", label: "Settings", icon: Settings },
];

export function Sidebar({
  open,
  onClose,
  collapsed,
  setCollapsed,
}: {
  open: boolean;
  onClose: () => void;
  collapsed: boolean;
  setCollapsed: (v: boolean) => void;
}) {
  const path = useRouterState({
    select: (s) => s.location.pathname,
  });

  const navigate = useNavigate();
  const { logout } = useAuth();

  return (
    <>
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm lg:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-50 border-r border-sidebar-border bg-sidebar transition-all duration-300 ease-in-out lg:translate-x-0",
          collapsed ? "w-20" : "w-72",
          open ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        )}
      >
        <div className="flex h-full flex-col">
          {/* HEADER */}
          <div
            className={cn(
              "flex items-center py-5",
              collapsed
                ? "justify-center px-2"
                : "justify-between px-6"
            )}
          >
            <Link
              to="/"
              className={cn(
                "flex items-center",
                collapsed ? "justify-center" : "gap-2.5"
              )}
            >
              <div className="gradient-primary flex h-9 w-9 items-center justify-center rounded-xl shadow-glow">
                <Sparkles className="h-5 w-5 text-primary-foreground" />
              </div>

              {!collapsed && (
                <div>
                  <div className="text-base font-bold tracking-tight text-sidebar-foreground">
                    LeadFlow
                  </div>
                  <div className="-mt-0.5 text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
                    CRM Suite
                  </div>
                </div>
              )}
            </Link>

            {!collapsed && (
              <button
                onClick={() => setCollapsed(true)}
                className="hidden lg:flex rounded-lg p-2 hover:bg-sidebar-accent"
              >
                <Menu className="h-5 w-5" />
              </button>
            )}

            <button
              onClick={onClose}
              className="rounded-lg p-1.5 text-muted-foreground hover:bg-sidebar-accent lg:hidden"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* COLLAPSED EXPAND BUTTON */}
          {collapsed && (
            <div className="hidden lg:flex justify-center pb-4">
              <button
                onClick={() => setCollapsed(false)}
                className="rounded-lg p-2 hover:bg-sidebar-accent"
              >
                <Menu className="h-5 w-5" />
              </button>
            </div>
          )}

          {/* NAVIGATION */}
          <nav className="flex-1 space-y-1 px-3 py-2">
            {nav.map((item) => {
              const active =
                item.to === "/"
                  ? path === "/"
                  : path.startsWith(item.to);

              const Icon = item.icon;

              return (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={onClose}
                  title={collapsed ? item.label : ""}
                  className={cn(
                    "group flex items-center rounded-xl px-3 py-2.5 text-sm font-medium transition-all",
                    collapsed ? "justify-center" : "gap-3",
                    active
                      ? "bg-sidebar-accent text-sidebar-accent-foreground shadow-sm"
                      : "text-sidebar-foreground/80 hover:bg-sidebar-accent/60 hover:text-sidebar-foreground"
                  )}
                >
                  <Icon
                    className={cn(
                      "h-[18px] w-[18px] transition-transform group-hover:scale-110",
                      active && "text-primary"
                    )}
                  />

                  {!collapsed && <span>{item.label}</span>}

                  {active && !collapsed && (
                    <span className="ml-auto h-1.5 w-1.5 rounded-full bg-primary" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* FOOTER */}
          <div className="border-t border-sidebar-border p-3">
            <button
              onClick={() => { logout(); navigate({ to: "/login" }); }}
              className={cn(
                "flex w-full items-center rounded-xl px-3 py-2.5 text-sm font-medium transition-colors hover:bg-destructive/10 hover:text-destructive",
                collapsed ? "justify-center" : "gap-3"
              )}
            >
              <LogOut className="h-[18px] w-[18px]" />
              {!collapsed && <span>Logout</span>}
            </button>

            {!collapsed && (
              <div className="mt-3 rounded-2xl border border-sidebar-border bg-gradient-to-br from-accent to-sidebar-accent p-4">
                <div className="text-xs font-semibold text-sidebar-accent-foreground">
                  Pro Tip ✨
                </div>
                <p className="mt-1 text-xs text-muted-foreground">
                  Drag leads on the Kanban board to update status instantly.
                </p>
              </div>
            )}
          </div>
        </div>
      </aside>
    </>
  );
}

