import {z} from "zod";

export const signInScheme = z.object({
    username: z.string().min(1, "Логін є обов'язковим"),
    password: z.string().min(1, "Пароль є обов'язковим"),
});
