import { useState, type FormEvent } from "react";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useLeads } from "@/lib/leads-store";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

type LeadSource = "Website" | "Referral" | "LinkedIn" | "Cold Call" | "Event" | "Email Campaign";
type LeadStatus = "New" | "Contacted" | "Qualified" | "Converted" | "Lost";

const sources: LeadSource[] = ["Website", "Referral", "LinkedIn", "Cold Call", "Event", "Email Campaign"];
const statuses: LeadStatus[] = ["New", "Contacted", "Qualified", "Converted", "Lost"];

export function AddLeadDialog({ open, onOpenChange }: { open: boolean; onOpenChange: (v: boolean) => void }) {
  const { addLead } = useLeads();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState({
  name: "",
  email: "",
  phone: "",
  company: "",
  source: "Website" as LeadSource,
  status: "New" as LeadStatus,
  value: 0,
  notes: "",
  followUpDate: new Date(Date.now() + 7 * 86400000)
    .toISOString()
    .slice(0, 10),
});
  const [errors, setErrors] = useState<Record<string, string>>({});

  async function submit(e: FormEvent) {
    e.preventDefault();
    const errs: Record<string, string> = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) errs.email = "Valid email required";
    if (!form.company.trim()) errs.company = "Company is required";
    setErrors(errs);
    if (Object.keys(errs).length) return;

    setIsSubmitting(true);
    try {
      await addLead({
  name: form.name.trim(),
  email: form.email.trim(),
  phone: form.phone.trim(),
  company: form.company.trim(),
  source: form.source,
  status: form.status,
  value: form.value,
  notes: form.notes.trim(),
  followUpDate: new Date(form.followUpDate).toISOString(),
});
      toast.success("Lead added successfully", { description: `${form.name} from ${form.company}` });
      onOpenChange(false);
      setForm({
        name: "",
        email: "",
        phone: "",
        company: "",
        source: "Website",
        status: "New",
        value: 0,
        notes: "",
        followUpDate: new Date(Date.now() + 7 * 86400000)
          .toISOString()
          .slice(0, 10),
      });
    } catch (error) {
      toast.error("Failed to add lead. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-xl">Add New Lead</DialogTitle>
          <DialogDescription>Capture a new lead to your pipeline. Fields marked with * are required.</DialogDescription>
        </DialogHeader>
        <form onSubmit={submit} className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-1.5 sm:col-span-2">
            <Label htmlFor="name">Full Name *</Label>
            <Input id="name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Jane Cooper" disabled={isSubmitting} />
            {errors.name && <p className="text-xs text-destructive">{errors.name}</p>}
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="email">Email *</Label>
            <Input id="email" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="jane@acme.com" disabled={isSubmitting} />
            {errors.email && <p className="text-xs text-destructive">{errors.email}</p>}
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="phone">Phone</Label>
            <Input id="phone" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="+1 (555) 000-0000" disabled={isSubmitting} />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="company">Company *</Label>
            <Input id="company" value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} placeholder="Acme Corp" disabled={isSubmitting} />
            {errors.company && <p className="text-xs text-destructive">{errors.company}</p>}
          </div>
          <div className="space-y-1.5">
  <Label htmlFor="value">Deal Value ($)</Label>
  <Input
    id="value"
    type="number"
    value={form.value}
    min="0"
    onChange={(e) =>
      setForm({
        ...form,
        value: Math.max(0, Number(e.target.value) || 0),
      })
    }
    placeholder="5000"
  />
</div>
          <div className="space-y-1.5">
            <Label>Follow-up Date</Label>
            <Input type="date" value={form.followUpDate} onChange={(e) => setForm({ ...form, followUpDate: e.target.value })} disabled={isSubmitting} />
          </div>
          <div className="space-y-1.5">
            <Label>Lead Source</Label>
            <Select value={form.source} onValueChange={(v) => setForm({ ...form, source: v as LeadSource })} disabled={isSubmitting}>
              <SelectTrigger><SelectValue /></SelectTrigger>
              <SelectContent>{sources.map((s) => <SelectItem key={s} value={s}>{s}</SelectItem>)}</SelectContent>
            </Select>
          </div>
          <div className="space-y-1.5">
            <Label>Lead Status</Label>
            <Select value={form.status} onValueChange={(v) => setForm({ ...form, status: v as LeadStatus })} disabled={isSubmitting}>
              <SelectTrigger><SelectValue /></SelectTrigger>
              <SelectContent>{statuses.map((s) => <SelectItem key={s} value={s}>{s}</SelectItem>)}</SelectContent>
            </Select>
          </div>
          <div className="space-y-1.5 sm:col-span-2">
            <Label>Notes (Initial)</Label>
            <Textarea rows={3} value={form.notes} onChange={(e) => setForm({ ...form, notes: e.target.value })} placeholder="Initial conversation, interests, next steps..." disabled={isSubmitting} />
          </div>
          <DialogFooter className="sm:col-span-2">
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)} disabled={isSubmitting}>Cancel</Button>
            <Button type="submit" className="gradient-primary text-primary-foreground shadow-glow" disabled={isSubmitting}>
              {isSubmitting ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Saving...</> : "Save Lead"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

