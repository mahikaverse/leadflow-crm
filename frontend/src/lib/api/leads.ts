import apiClient from "./client";

export type LeadStatus = "New" | "Contacted" | "Qualified" | "Converted" | "Lost";

export interface Note {
  _id: string;
  text: string;
  createdAt: string;
}

export interface Activity {
  _id: string;
  type: "created" | "status_changed" | "note_added" | "followup_completed" | "updated";
  message: string;
  at: string;
}

export interface Lead {
  _id: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  source: string;
  value: number;
  status: LeadStatus;
  notes: Note[];
  activities: Activity[];
  followUpDate?: string;
  followUpCompletedAt?: string;
  createdAt: string;
  updatedAt: string;
}

export type LeadInput = Partial<Omit<Lead, "_id" | "notes" | "activities" | "createdAt" | "updatedAt">> & {
  name?: string;
  email?: string;
  notes?: string;
};

export interface Analytics {
  totalLeads: number;
  activeLeads: number;
  convertedLeads: number;
  lostLeads: number;
  conversionRate: number;
  pipelineValue: number;
  averageDealSize: number;
  followUps: number;
  completedFollowUps: number;
  overdueFollowUps: number;
  statusDistribution: { name: LeadStatus; value: number }[];
  sourcePerformance: { source: string; leads: number; converted: number }[];
  monthlyGrowth: { year: number; month: number; leads: number; converted: number }[];
  topCompanies: { name: string; count: number; value: number }[];
}

function safeNumber(value: unknown) {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : 0;
}

function normalizeLead(lead: Lead): Lead {
  return { ...lead, value: safeNumber(lead.value) };
}

function normalizeAnalytics(data: Analytics): Analytics {
  return {
    ...data,
    totalLeads: safeNumber(data.totalLeads),
    activeLeads: safeNumber(data.activeLeads),
    convertedLeads: safeNumber(data.convertedLeads),
    lostLeads: safeNumber(data.lostLeads),
    conversionRate: safeNumber(data.conversionRate),
    pipelineValue: safeNumber(data.pipelineValue),
    averageDealSize: safeNumber(data.averageDealSize),
    followUps: safeNumber(data.followUps),
    completedFollowUps: safeNumber(data.completedFollowUps),
    overdueFollowUps: safeNumber(data.overdueFollowUps),
    statusDistribution: data.statusDistribution.map((row) => ({ ...row, value: safeNumber(row.value) })),
    sourcePerformance: data.sourcePerformance.map((row) => ({ ...row, leads: safeNumber(row.leads), converted: safeNumber(row.converted) })),
    monthlyGrowth: data.monthlyGrowth.map((row) => ({ ...row, leads: safeNumber(row.leads), converted: safeNumber(row.converted) })),
    topCompanies: data.topCompanies.map((row) => ({ ...row, count: safeNumber(row.count), value: safeNumber(row.value) })),
  };
}

export const getLeads = async (params?: Record<string, string>) => (await apiClient.get<Lead[]>("/leads", { params })).data.map(normalizeLead);
export const getLead = async (id: string) => normalizeLead((await apiClient.get<Lead>(`/leads/${id}`)).data);
export const createLead = async (lead: LeadInput) => normalizeLead((await apiClient.post<Lead>("/leads", lead)).data);
export const updateLead = async (id: string, lead: LeadInput) => normalizeLead((await apiClient.put<Lead>(`/leads/${id}`, lead)).data);
export const deleteLead = async (id: string) => (await apiClient.delete(`/leads/${id}`)).data;
export const addNote = async (id: string, text: string) => normalizeLead((await apiClient.post<Lead>(`/leads/${id}/notes`, { text })).data);
export const deleteNote = async (id: string, noteId: string) => normalizeLead((await apiClient.delete<Lead>(`/leads/${id}/notes/${noteId}`)).data);
export const completeFollowUp = async (id: string) => normalizeLead((await apiClient.post<Lead>(`/leads/${id}/complete-follow-up`)).data);
export const getAnalytics = async () => normalizeAnalytics((await apiClient.get<Analytics>("/analytics")).data);
