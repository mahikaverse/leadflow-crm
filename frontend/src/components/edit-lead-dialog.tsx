import { useEffect, useState, type FormEvent } from "react";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { type Lead, useLeads } from "@/lib/leads-store";

type LeadSource = "Website" | "Referral" | "LinkedIn" | "Cold Call" | "Event" | "Email Campaign";
type LeadStatus = Lead["status"];

const sources: LeadSource[] = ["Website", "Referral", "LinkedIn", "Cold Call", "Event", "Email Campaign"];
const statuses: LeadStatus[] = ["New", "Contacted", "Qualified", "Converted", "Lost"];

function toDateInputValue(value?: string) {
  if (!value) return "";
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? "" : date.toISOString().slice(0, 10);
}

function getNotesValue(notes: Lead["notes"]) {
  if (!notes) return "";
  if (typeof notes === "string") return notes;
  return notes.map((note) => note.text).join("\n");
}

function createForm(lead: Lead | null) {
  return {
    name: lead?.name ?? "",
    email: lead?.email ?? "",
    phone: lead?.phone ?? "",
    company: lead?.company ?? "",
    source: (lead?.source || "Website") as LeadSource,
    status: (lead?.status || "New") as LeadStatus,
    value: lead?.value ?? 0,
    followUpDate: toDateInputValue(lead?.followUpDate),
    notes: lead ? getNotesValue(lead.notes) : "",
  };
}

interface EditLeadDialogProps {
  lead: Lead | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function EditLeadDialog({ lead, open, onOpenChange }: EditLeadDialogProps) {
  const { updateLead } = useLeads();
  const [form, setForm] = useState(() => createForm(lead));
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (open) {
      setForm(createForm(lead));
      setErrors({});
    }
  }, [lead, open]);

  async function submit(event: FormEvent) {
    event.preventDefault();
    if (!lead) return;

    const nextErrors: Record<string, string> = {};
    if (!form.name.trim()) nextErrors.name = "Name is required";
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) nextErrors.email = "Valid email required";
    if (!form.company.trim()) nextErrors.company = "Company is required";
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;

    setIsSubmitting(true);
    try {
      await updateLead(lead._id, {
        name: form.name.trim(),
        email: form.email.trim(),
        phone: form.phone.trim(),
        company: form.company.trim(),
        source: form.source,
        status: form.status,
        value: Math.max(0, Number(form.value) || 0),
        followUpDate: form.followUpDate ? new Date(form.followUpDate).toISOString() : "",
        notes: form.notes,
      });
      toast.success("Lead updated successfully", { description: form.name.trim() });
      onOpenChange(false);
    } catch (error) {
      toast.error("Failed to update lead. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Dialog open={open} onOpenChange={(nextOpen) => !isSubmitting && onOpenChange(nextOpen)}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-xl">Edit Lead</DialogTitle>
          <DialogDescription>Update the lead details and save your changes.</DialogDescription>
        </DialogHeader>
        <form onSubmit={submit} className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-1.5 sm:col-span-2">
            <Label htmlFor="edit-name">Full Name *</Label>
            <Input id="edit-name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} disabled={isSubmitting} />
            {errors.name && <p className="text-xs text-destructive">{errors.name}</p>}
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="edit-email">Email *</Label>
            <Input id="edit-email" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} disabled={isSubmitting} />
            {errors.email && <p className="text-xs text-destructive">{errors.email}</p>}
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="edit-phone">Phone</Label>
            <Input id="edit-phone" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} disabled={isSubmitting} />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="edit-company">Company *</Label>
            <Input id="edit-company" value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} disabled={isSubmitting} />
            {errors.company && <p className="text-xs text-destructive">{errors.company}</p>}
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="edit-follow-up">Follow-up Date</Label>
            <Input id="edit-follow-up" type="date" value={form.followUpDate} onChange={(e) => setForm({ ...form, followUpDate: e.target.value })} disabled={isSubmitting} />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="edit-value">Deal Value</Label>
            <Input id="edit-value" type="number" min="0" value={form.value} onChange={(e) => setForm({ ...form, value: Math.max(0, Number(e.target.value) || 0) })} disabled={isSubmitting} />
          </div>
          <div className="space-y-1.5">
            <Label>Lead Source</Label>
            <Select value={form.source} onValueChange={(source) => setForm({ ...form, source: source as LeadSource })} disabled={isSubmitting}>
              <SelectTrigger><SelectValue /></SelectTrigger>
              <SelectContent>{sources.map((source) => <SelectItem key={source} value={source}>{source}</SelectItem>)}</SelectContent>
            </Select>
          </div>
          <div className="space-y-1.5">
            <Label>Lead Status</Label>
            <Select value={form.status} onValueChange={(status) => setForm({ ...form, status: status as LeadStatus })} disabled={isSubmitting}>
              <SelectTrigger><SelectValue /></SelectTrigger>
              <SelectContent>{statuses.map((status) => <SelectItem key={status} value={status}>{status}</SelectItem>)}</SelectContent>
            </Select>
          </div>
          <div className="space-y-1.5 sm:col-span-2">
            <Label htmlFor="edit-notes">Notes</Label>
            <Textarea id="edit-notes" rows={3} value={form.notes} onChange={(e) => setForm({ ...form, notes: e.target.value })} disabled={isSubmitting} />
          </div>
          <DialogFooter className="sm:col-span-2">
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)} disabled={isSubmitting}>Cancel</Button>
            <Button type="submit" className="gradient-primary text-primary-foreground shadow-glow" disabled={isSubmitting}>
              {isSubmitting ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Saving...</> : "Save Changes"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
