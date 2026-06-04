import { useState, type ReactNode } from "react";
import { Link, useNavigate, useRouterState } from "@tanstack/react-router";
import { LayoutDashboard, Users, Kanban, Bell, Loader2 } from "lucide-react";
import { Sidebar } from "./sidebar";
import { Topbar } from "./topbar";
import { cn } from "@/lib/utils";
import { useAuth } from "@/lib/auth-store";
import { useEffect } from "react";
import { useLeads } from "@/lib/leads-store";

export function AppLayout({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const path = useRouterState({ select: (s) => s.location.pathname });
  const navigate = useNavigate();
  const { user, loading } = useAuth();
  const { error } = useLeads();

  useEffect(() => {
    if (!loading && !user) navigate({ to: "/login", replace: true });
  }, [loading, navigate, user]);

  if (loading || !user) {
    return <div className="flex min-h-screen items-center justify-center"><Loader2 className="h-8 w-8 animate-spin text-primary" /></div>;
  }

  const mobileNav = [
    { to: "/", label: "Home", icon: LayoutDashboard },
    { to: "/leads", label: "Leads", icon: Users },
    { to: "/kanban", label: "Board", icon: Kanban },
    { to: "/followups", label: "Tasks", icon: Bell },
  ];

  return (
    <div className="flex min-h-screen w-full bg-background">
    <Sidebar
      open={open}
      onClose={() => setOpen(false)}
      collapsed={collapsed}
      setCollapsed={setCollapsed}
    />
      <div
  className={cn(
    "flex min-w-0 flex-1 flex-col transition-all duration-300",
    collapsed ? "lg:ml-20" : "lg:ml-72"
  )}
>
        <Topbar onMenu={() => setOpen(true)} />
        <main className="flex-1 px-4 pb-24 pt-6 sm:px-6 lg:pb-10">
          <div className="mx-auto w-full max-w-[1400px] animate-fade-in">
            {error && <div className="mb-4 rounded-xl border border-destructive/30 bg-destructive/5 p-3 text-sm text-destructive">{error}</div>}
            {children}
          </div>
        </main>

        <nav className="fixed bottom-0 left-0 right-0 z-30 border-t border-border bg-background/95 backdrop-blur-xl lg:hidden">
          <div className="grid grid-cols-4">
            {mobileNav.map((item) => {
              const active = item.to === "/" ? path === "/" : path.startsWith(item.to);
              const Icon = item.icon;
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className={cn(
                    "flex flex-col items-center gap-1 py-3 text-[11px] font-medium transition-colors",
                    active ? "text-primary" : "text-muted-foreground",
                  )}
                >
                  <Icon className="h-5 w-5" />
                  {item.label}
                </Link>
              );
            })}
          </div>
        </nav>
      </div>
    </div>
  );
}
