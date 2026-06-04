import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import * as api from "./api/leads";
import { useAuth } from "./auth-store";

export type { Activity, Lead, LeadStatus, Note } from "./api/leads";

interface LeadsContextValue {
  leads: api.Lead[];
  loading: boolean;
  error: string | null;
  addLead: (data: api.LeadInput) => Promise<void>;
  updateLead: (id: string, data: api.LeadInput) => Promise<void>;
  deleteLead: (id: string) => Promise<void>;
  updateLeadStatus: (id: string, status: api.LeadStatus) => Promise<void>;
  addNote: (id: string, text: string) => Promise<void>;
  deleteNote: (id: string, noteId: string) => Promise<void>;
  completeFollowUp: (id: string) => Promise<void>;
  refreshLeads: () => Promise<void>;
  getLead: (id: string) => Promise<api.Lead | undefined>;
}

const LeadsContext = createContext<LeadsContextValue | null>(null);

export function LeadsProvider({ children }: { children: ReactNode }) {
  const { user, loading: authLoading } = useAuth();
  const [leads, setLeads] = useState<api.Lead[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const refreshLeads = useCallback(async () => {
    if (!user) {
      setLeads([]);
      return;
    }
    setLoading(true);
    try {
      setLeads(await api.getLeads());
      setError(null);
    } catch (err: any) {
      setError(err.response?.data?.message || err.message || "Failed to fetch leads");
    } finally {
      setLoading(false);
    }
  }, [user]);

  useEffect(() => {
    if (!authLoading) refreshLeads();
  }, [authLoading, refreshLeads]);

  const mutate = useCallback(async (action: () => Promise<unknown>) => {
    await action();
    await refreshLeads();
  }, [refreshLeads]);

  const value = useMemo<LeadsContextValue>(() => ({
    leads, loading, error, refreshLeads,
    getLead: async (id) => {
      try { return await api.getLead(id); } catch { return undefined; }
    },
    addLead: (data) => mutate(() => api.createLead(data)),
    updateLead: (id, data) => mutate(() => api.updateLead(id, data)),
    deleteLead: (id) => mutate(() => api.deleteLead(id)),
    updateLeadStatus: (id, status) => mutate(() => api.updateLead(id, { status })),
    addNote: (id, text) => mutate(() => api.addNote(id, text)),
    deleteNote: (id, noteId) => mutate(() => api.deleteNote(id, noteId)),
    completeFollowUp: (id) => mutate(() => api.completeFollowUp(id)),
  }), [error, leads, loading, mutate, refreshLeads]);

  return <LeadsContext.Provider value={value}>{children}</LeadsContext.Provider>;
}

export function useLeads() {
  const context = useContext(LeadsContext);
  if (!context) throw new Error("useLeads must be used inside LeadsProvider");
  return context;
}
