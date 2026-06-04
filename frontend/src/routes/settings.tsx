import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Bell, Palette, Shield, User } from "lucide-react";
import { toast } from "sonner";
import { AppLayout } from "@/components/layout/app-layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useAuth } from "@/lib/auth-store";
import { useTheme } from "@/lib/theme";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/settings")({ head: () => ({ meta: [{ title: "Settings - LeadFlow CRM" }] }), component: SettingsPage });
const tabs = [{ id: "profile", label: "Profile", icon: User }, { id: "notifications", label: "Notifications", icon: Bell }, { id: "appearance", label: "Appearance", icon: Palette }, { id: "account", label: "Account", icon: Shield }] as const;

function SettingsPage() {
  const { user, updateProfile } = useAuth();
  const { theme, toggle } = useTheme();
  const [active, setActive] = useState<(typeof tabs)[number]["id"]>("profile");
  const [form, setForm] = useState({ name: "", jobTitle: "", phone: "" });
  const [saving, setSaving] = useState(false);
  useEffect(() => { if (user) setForm({ name: user.name, jobTitle: user.jobTitle || "", phone: user.phone || "" }); }, [user]);
  async function save(data: Parameters<typeof updateProfile>[0]) {
    setSaving(true);
    try { await updateProfile(data); toast.success("Settings updated"); } catch (error: any) { toast.error(error.response?.data?.message || "Unable to save settings"); } finally { setSaving(false); }
  }

  return (
    <AppLayout>
      <h1 className="text-3xl font-bold tracking-tight">Settings</h1><p className="mt-1 text-sm text-muted-foreground">Manage your account preferences and profile.</p>
      <div className="mt-6 grid gap-6 lg:grid-cols-[220px_1fr]">
        <nav className="space-y-1">{tabs.map((tab) => <button key={tab.id} onClick={() => setActive(tab.id)} className={cn("flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium", active === tab.id ? "bg-accent" : "text-muted-foreground hover:bg-muted")}><tab.icon className="h-4 w-4" />{tab.label}</button>)}</nav>
        <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
          {active === "profile" && <div className="space-y-5"><Title title="Profile" subtitle="Your personal information." /><div className="grid gap-4 sm:grid-cols-2"><Field label="Full name" value={form.name} onChange={(name) => setForm({ ...form, name })} /><Field label="Email" value={user?.email || ""} disabled /><Field label="Job title" value={form.jobTitle} onChange={(jobTitle) => setForm({ ...form, jobTitle })} /><Field label="Phone" value={form.phone} onChange={(phone) => setForm({ ...form, phone })} /></div><div className="flex justify-end"><Button disabled={saving} onClick={() => save(form)} className="gradient-primary text-primary-foreground">Save changes</Button></div></div>}
          {active === "notifications" && <div className="space-y-4"><Title title="Notifications" subtitle="Choose how LeadFlow keeps you informed." />{Object.entries(user?.preferences || {}).map(([key, value]) => <div key={key} className="flex items-center justify-between rounded-xl border border-border p-4"><span className="text-sm font-medium">{key.replace(/([A-Z])/g, " $1")}</span><Switch checked={value} onCheckedChange={(checked) => save({ preferences: { ...user!.preferences, [key]: checked } })} /></div>)}</div>}
          {active === "appearance" && <div className="space-y-5"><Title title="Appearance" subtitle="Switch between light and dark themes." /><Button variant="outline" onClick={toggle}>Use {theme === "dark" ? "light" : "dark"} theme</Button></div>}
          {active === "account" && <div className="space-y-5"><Title title="Account" subtitle="Your authenticated account details." /><div className="rounded-xl border border-border p-4"><div className="text-sm font-medium">Signed in as {user?.email}</div><div className="mt-1 text-xs text-muted-foreground">Passwords are securely hashed and API access is protected by JWT authentication.</div></div></div>}
        </div>
      </div>
    </AppLayout>
  );
}

function Title({ title, subtitle }: { title: string; subtitle: string }) { return <div className="border-b border-border pb-4"><h2 className="text-lg font-semibold">{title}</h2><p className="text-sm text-muted-foreground">{subtitle}</p></div>; }
function Field({ label, onChange, ...props }: { label: string; onChange?: (value: string) => void } & Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange">) { return <div className="space-y-1.5"><Label>{label}</Label><Input {...props} onChange={(event) => onChange?.(event.target.value)} /></div>; }
