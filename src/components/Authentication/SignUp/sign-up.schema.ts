import { z } from "zod";

export const schema = z
  .object({
    displayName: z.string().min(3).default(""),
    email: z.string().email().default(""),
    password: z
      .string()
      .min(8)
      .max(20)
      .regex(/(?=.*\d).*/, {
        message: "Must contain a number",
      })
      .regex(/(?=.*[a-z]).*/, {
        message: "Must contain a lowercase letter",
      })
      .regex(/(?=.*[A-Z]).*/, {
        message: "Must contain a uppercase letter",
      })
      .default(""),
    confirmPassword: z.string().default(""),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"], // path of error
  });

export type SignUpFormFields = z.infer<typeof schema>;
