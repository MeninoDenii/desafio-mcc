import { toast } from "react-toastify";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface User {
  name: string;
  email: string;
  password: string;
}

interface AuthState {
  users: User[];
  currentUser: User | null;
  register: (user: User) => void;
  login: (email: string, password: string) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      users: [],
      currentUser: null,
      register: (user: User) => {
        const { users } = get();

        const userExists = users.some((item) => item?.email === user?.email);

        if (userExists) {
          toast.error("E-mail já cadastrado");
          return;
        }

        const newUser = { ...user };
        set({ users: [...users, newUser], currentUser: newUser });
        toast.success("Usuário cadastrado com sucesso");
      },

      login: (email, password) => {
        const { users } = get();

        const foundUser = users.find(
          (user) => user.email === email && user.password === password
        );

        if (foundUser) {
          set({ currentUser: foundUser });
          toast.success("Usuário logado com sucesso!");
        } else {
          toast.error("Usuário não encontrado!");
        }
      },

      logout: () => {
        set({ currentUser: null });
      },
    }),
    {
      name: "auth-storage",
    }
  )
);
