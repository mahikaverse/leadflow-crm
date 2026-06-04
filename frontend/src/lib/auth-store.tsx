import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import * as api from "./api/auth";
import { getAuthToken, TOKEN_KEY } from "./session";

interface AuthContextValue {
  user: api.User | null;
  loading: boolean;
  login: (email: string, password: string, remember?: boolean) => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
  updateProfile: (data: Partial<api.User>) => Promise<void>;
}

const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<api.User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = getAuthToken();
    if (!token) {
      setLoading(false);
      return;
    }
    api.getProfile()
      .then(setUser)
      .catch(() => {
        localStorage.removeItem(TOKEN_KEY);
        sessionStorage.removeItem(TOKEN_KEY);
      })
      .finally(() => setLoading(false));
  }, []);

  const value = useMemo<AuthContextValue>(() => ({
    user,
    loading,
    login: async (email, password, remember = true) => {
      const result = await api.login(email, password);
      const storage = remember ? localStorage : sessionStorage;
      storage.setItem(TOKEN_KEY, result.token);
      setUser(result.user);
    },
    register: async (name, email, password) => {
      const result = await api.register(name, email, password);
      localStorage.setItem(TOKEN_KEY, result.token);
      setUser(result.user);
    },
    logout: () => {
      localStorage.removeItem(TOKEN_KEY);
      sessionStorage.removeItem(TOKEN_KEY);
      setUser(null);
    },
    updateProfile: async (data) => setUser(await api.updateProfile(data)),
  }), [user, loading]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used inside AuthProvider");
  return context;
}
