import { toast } from "react-toastify";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface User {
  name: string;
  email: string;
  password: string;
  id?: string;
}

interface AuthState {
  users: User[];
  currentUser: User | null;
  register: (user: User) => void;
  login: (email: string, password: string) => void;
  logout: () => void;
  success: boolean;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      users: [],
      currentUser: null,
      success: false,

      register: (user: User) => {
        const { users } = get();

        const userExists = users.some((item) => item?.email === user?.email);

        if (userExists) {
          return;
        }

        const newUser = { ...user };
        set({
          users: [...users, newUser],
          currentUser: newUser,
        });
      },

      login: (email, password) => {
        const { users } = get();

        const foundUser = users.find(
          (user) => user.email === email && user.password === password
        );

        if (foundUser) {
          set({ currentUser: foundUser, success: true });
          window.location.href = "/home";
        } else {
          toast.error("Usuário ou senha inválidos");
          set({ currentUser: null });
        }
      },

      logout: () => {
        set({ currentUser: null, success: false });
      },
    }),
    {
      name: "auth-storage",
    }
  )
);
