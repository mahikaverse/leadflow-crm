import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { ArrowRight, Loader2, Lock, Mail, Sparkles, User } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { useAuth } from "@/lib/auth-store";

export const Route = createFileRoute("/register")({
  head: () => ({ meta: [{ title: "Create account - LeadFlow CRM" }] }),
  component: RegisterPage,
});

function RegisterPage() {
  const navigate = useNavigate();
  const { register } = useAuth();
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [submitting, setSubmitting] = useState(false);

  async function submit(event: React.FormEvent) {
    event.preventDefault();
    if (!form.name.trim() || !form.email.trim() || form.password.length < 8) {
      toast.error("Enter your name, email, and an 8+ character password");
      return;
    }
    setSubmitting(true);
    try {
      await register(form.name, form.email, form.password);
      toast.success("Account created");
      navigate({ to: "/" });
    } catch (error: any) {
      toast.error(error.response?.data?.message || "Unable to create account");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-6">
      <div className="w-full max-w-md">
        <div className="mb-8 flex items-center gap-2">
          <div className="gradient-primary flex h-10 w-10 items-center justify-center rounded-xl"><Sparkles className="h-5 w-5 text-primary-foreground" /></div>
          <span className="text-lg font-bold">LeadFlow</span>
        </div>
        <h1 className="text-3xl font-bold tracking-tight">Create your account</h1>
        <p className="mt-2 text-sm text-muted-foreground">Start managing your pipeline with real-time CRM data.</p>
        <form onSubmit={submit} className="mt-8 space-y-5">
          <AuthField icon={User} placeholder="Full name" value={form.name} onChange={(name) => setForm({ ...form, name })} />
          <AuthField icon={Mail} type="email" placeholder="Email address" value={form.email} onChange={(email) => setForm({ ...form, email })} />
          <AuthField icon={Lock} type="password" placeholder="Password (8+ characters)" value={form.password} onChange={(password) => setForm({ ...form, password })} />
          <button disabled={submitting} className="flex h-12 w-full items-center justify-center gap-2 rounded-xl gradient-primary text-sm font-semibold text-primary-foreground shadow-glow disabled:opacity-60">
            {submitting ? <Loader2 className="h-4 w-4 animate-spin" /> : <>Create account <ArrowRight className="h-4 w-4" /></>}
          </button>
        </form>
        <p className="mt-6 text-center text-sm text-muted-foreground">Already have an account? <Link to="/login" className="font-semibold text-primary hover:underline">Sign in</Link></p>
      </div>
    </div>
  );
}

function AuthField({ icon: Icon, onChange, ...props }: { icon: any; onChange: (value: string) => void } & Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange">) {
  return (
    <div className="relative">
      <Icon className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
      <input {...props} onChange={(event) => onChange(event.target.value)} className="h-12 w-full rounded-xl border border-input bg-card pl-10 pr-3 text-sm shadow-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20" />
    </div>
  );
}
