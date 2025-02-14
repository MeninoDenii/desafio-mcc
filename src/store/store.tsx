import { toast } from "react-toastify";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface User {
  name: string;
  email: string;
  password: string;
}

interface AuthState {
  user: User | null;
  register: (user: User) => void;
  login: (email: string, password: string) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      user: null,
      register: (user: User) => {
        set({ user });
        toast.success("Usuário cadastrado com sucesso");
      },

      login: (email, password) => {
        const { user } = get();
        if (user && user.email === email && user.password === password) {
          set({ user });
          toast.success("Usuário logado com sucesso");
        } else {
          toast.error("E-mail ou senha inválidos");
        }
      },

      logout: () => {
        set({ user: null });
      },
    }),
    {
      name: "auth-storage",
    }
  )
);
