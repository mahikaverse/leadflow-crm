import apiClient from "./client";

export interface UserPreferences {
  emailNotifications: boolean;
  pushNotifications: boolean;
  weeklySummary: boolean;
  productUpdates: boolean;
}

export interface User {
  _id: string;
  name: string;
  email: string;
  jobTitle: string;
  phone: string;
  preferences: UserPreferences;
}

export interface AuthResponse {
  token: string;
  user: User;
}

export async function login(email: string, password: string) {
  return (await apiClient.post<AuthResponse>("/auth/login", { email, password })).data;
}

export async function register(name: string, email: string, password: string) {
  return (await apiClient.post<AuthResponse>("/auth/register", { name, email, password })).data;
}

export async function getProfile() {
  return (await apiClient.get<User>("/auth/profile")).data;
}

export async function updateProfile(data: Partial<User>) {
  return (await apiClient.put<User>("/auth/profile", data)).data;
}
