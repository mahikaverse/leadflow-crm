import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Sparkles, Mail, Lock, ArrowRight, TrendingUp, Users, Target, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { useAuth } from "@/lib/auth-store";

export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [
      { title: "Sign in — LeadFlow CRM" },
      { name: "description", content: "Sign in to LeadFlow CRM to manage your leads, pipelines, and follow-ups." },
    ],
  }),
  component: LoginPage,
});

function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const { login: authenticate, user } = useAuth();

  useEffect(() => {
    if (user) navigate({ to: "/", replace: true });
  }, [navigate, user]);

  async function login(e: React.FormEvent) {
    e.preventDefault();
    if (!email || !password) {
      toast.error("Please enter your email and password");
      return;
    }
    setSubmitting(true);
    try {
      await authenticate(email, password, remember);
      toast.success("Welcome back!");
      navigate({ to: "/" });
    } catch (error: any) {
      toast.error(error.response?.data?.message || "Unable to sign in");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="grid min-h-screen w-full lg:grid-cols-2">
      {/* Left brand panel */}
      <div className="relative hidden overflow-hidden gradient-hero p-12 lg:flex lg:flex-col lg:justify-between">
        <div className="absolute inset-0 opacity-30" style={{ backgroundImage: "radial-gradient(circle at 20% 20%, white 1px, transparent 1px), radial-gradient(circle at 80% 60%, white 1px, transparent 1px)", backgroundSize: "48px 48px, 64px 64px" }} />
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-white/20 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-primary-foreground/10 blur-3xl" />

        <div className="relative z-10 flex items-center gap-3 text-primary-foreground">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/15 backdrop-blur-sm ring-1 ring-white/30">
            <Sparkles className="h-6 w-6" />
          </div>
          <div>
            <div className="text-lg font-bold tracking-tight">LeadFlow</div>
            <div className="-mt-0.5 text-xs uppercase tracking-widest opacity-80">CRM Suite</div>
          </div>
        </div>

        <div className="relative z-10 space-y-8 text-primary-foreground">
          <div>
            <h1 className="text-4xl font-bold leading-tight tracking-tight xl:text-5xl">
              Turn every lead into<br />a closed deal.
            </h1>
            <p className="mt-4 max-w-md text-base opacity-90">
              The modern CRM trusted by ambitious teams. Beautiful pipelines, smart follow-ups, real-time analytics.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-3">
            {[
              { icon: Users, label: "Lead Management", value: "Organized" },
              { icon: TrendingUp, label: "Analytics", value: "Live" },
              { icon: Target, label: "Follow-ups", value: "Tracked" },
            ].map(({ icon: Icon, label, value }) => (
              <div key={label} className="rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur-md">
                <Icon className="h-5 w-5 opacity-90" />
                <div className="mt-2 text-2xl font-bold">{value}</div>
                <div className="text-xs opacity-75">{label}</div>
              </div>
            ))}
          </div>

          <div className="rounded-2xl border border-white/20 bg-white/10 p-5 text-sm backdrop-blur-md">
            Secure JWT authentication, database-backed reporting, and responsive pipeline management in one workspace.
          </div>
        </div>

        <div className="relative z-10 text-xs text-primary-foreground/70">© 2026 LeadFlow Inc. All rights reserved.</div>
      </div>

      {/* Right form panel */}
      <div className="flex items-center justify-center bg-background p-6 sm:p-10">
        <div className="w-full max-w-md animate-fade-in">
          <div className="mb-8 lg:hidden">
            <div className="flex items-center gap-2">
              <div className="gradient-primary flex h-10 w-10 items-center justify-center rounded-xl">
                <Sparkles className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-lg font-bold">LeadFlow</span>
            </div>
          </div>

          <h2 className="text-3xl font-bold tracking-tight">Welcome back</h2>
          <p className="mt-2 text-sm text-muted-foreground">Sign in to your account to continue.</p>

          <form onSubmit={login} className="mt-8 space-y-5">
            <div className="group relative">
              <Mail className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground transition-colors group-focus-within:text-primary" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email address"
                className="peer h-12 w-full rounded-xl border border-input bg-card pl-10 pr-3 text-sm shadow-sm transition placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
            </div>
            <div className="group relative">
              <Lock className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground transition-colors group-focus-within:text-primary" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="h-12 w-full rounded-xl border border-input bg-card pl-10 pr-3 text-sm shadow-sm transition placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex cursor-pointer items-center gap-2 text-muted-foreground">
                <input type="checkbox" checked={remember} onChange={(e) => setRemember(e.target.checked)} className="h-4 w-4 rounded border-input text-primary focus:ring-primary" />
                Remember me
              </label>
              <button type="button" className="font-medium text-primary hover:underline">Forgot password?</button>
            </div>

            <button type="submit" disabled={submitting} className="group flex h-12 w-full items-center justify-center gap-2 rounded-xl gradient-primary text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-[1.01] disabled:opacity-60">
              {submitting ? <Loader2 className="h-4 w-4 animate-spin" /> : <>Sign in <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" /></>}
            </button>

            <div className="relative my-2">
              <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-border" /></div>
              <div className="relative flex justify-center"><span className="bg-background px-3 text-xs uppercase tracking-wider text-muted-foreground">or continue with</span></div>
            </div>

            <button type="button" disabled className="flex h-12 w-full items-center justify-center gap-3 rounded-xl border border-input bg-card text-sm font-medium opacity-50">
              <svg className="h-5 w-5" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
              Google sign-in unavailable
            </button>

            <p className="pt-2 text-center text-sm text-muted-foreground">
              Don't have an account?{" "}
              <Link to="/register" className="font-semibold text-primary hover:underline">Sign up free</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
