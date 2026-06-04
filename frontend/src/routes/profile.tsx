import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Mail, Phone, Save, UserRound } from "lucide-react";
import { toast } from "sonner";
import { AppLayout } from "@/components/layout/app-layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/lib/auth-store";

export const Route = createFileRoute("/profile")({
  head: () => ({ meta: [{ title: "Profile - LeadFlow CRM" }] }),
  component: ProfilePage,
});

function ProfilePage() {
  const { user, updateProfile } = useAuth();
  const [form, setForm] = useState({ name: "", jobTitle: "", phone: "" });
  const [saving, setSaving] = useState(false);
  useEffect(() => { if (user) setForm({ name: user.name, jobTitle: user.jobTitle || "", phone: user.phone || "" }); }, [user]);

  async function save() {
    setSaving(true);
    try { await updateProfile(form); toast.success("Profile updated"); } catch (error: any) { toast.error(error.response?.data?.message || "Unable to update profile"); } finally { setSaving(false); }
  }

  const initials = user?.name.split(" ").map((part) => part[0]).join("").slice(0, 2).toUpperCase();
  return (
    <AppLayout>
      <h1 className="text-3xl font-bold tracking-tight">Profile</h1>
      <p className="mt-1 text-sm text-muted-foreground">Manage your personal account information.</p>
      <div className="mt-6 max-w-3xl rounded-2xl border border-border bg-card p-6 shadow-soft">
        <div className="mb-6 flex items-center gap-4 border-b border-border pb-6">
          <div className="gradient-primary flex h-20 w-20 items-center justify-center rounded-2xl text-2xl font-bold text-primary-foreground">{initials || <UserRound />}</div>
          <div><div className="font-semibold">{user?.name}</div><div className="flex items-center gap-1 text-sm text-muted-foreground"><Mail className="h-3.5 w-3.5" />{user?.email}</div></div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Full name" value={form.name} onChange={(name) => setForm({ ...form, name })} />
          <Field label="Job title" value={form.jobTitle} onChange={(jobTitle) => setForm({ ...form, jobTitle })} />
          <Field label="Phone" value={form.phone} onChange={(phone) => setForm({ ...form, phone })} icon={Phone} />
          <Field label="Email" value={user?.email || ""} disabled icon={Mail} />
        </div>
        <div className="mt-6 flex justify-end"><Button disabled={saving} onClick={save} className="gradient-primary text-primary-foreground"><Save className="mr-2 h-4 w-4" />Save profile</Button></div>
      </div>
    </AppLayout>
  );
}

function Field({ label, icon: Icon, onChange, ...props }: { label: string; icon?: any; onChange?: (value: string) => void } & Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange">) {
  return <div className="space-y-1.5"><Label>{label}</Label><div className="relative">{Icon && <Icon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />}<Input {...props} onChange={(event) => onChange?.(event.target.value)} className={Icon ? "pl-9" : ""} /></div></div>;
}
