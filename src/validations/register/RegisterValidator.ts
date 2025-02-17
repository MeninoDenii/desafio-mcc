import { z } from "zod";

export const registerValidator = z
  .object({
    email: z.string().email({ message: "E-mail inválido" }),
    name: z
      .string()
      .min(3, { message: "O nome deve ter no mínimo 3 caracteres" }),
    password: z
      .string()
      .min(6, { message: "A senha deve ter no mínimo 6 caracteres" }),
    confirmPassword: z
      .string()
      .min(6, { message: "A senha deve ter no mínimo 6 caracteres" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "As senhas não coincidem",
    path: ["confirmPassword"],
  });
