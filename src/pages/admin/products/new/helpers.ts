import {z} from "zod";

export const newProductFormScheme = z.object({
    name: z.string().min(1, {message: "Назва товару не може бути пустою"}),
    price: z.any()
        .refine((value) => !isNaN(value), {message: "Ціна товару повинна бути числом"})
        .refine((value) => (value as number) > 0, {message: "Ціна товару повинна бути більше 0"}),
    quantity: z.any()
        .refine((value) => !isNaN(value), {message: "Кількість товару повинна бути числом"})
        .refine((value) => (value as number) >= 0, {message: "Кількість товару повинна бути більше або дорівнювати 0"}),
    description: z.string().min(1, {message: "Опис товару не може бути пустим"}),
    images: z.array(z.string()).nonempty({message: "Додайте хоча б одне зображення"}),
    type: z.string().min(1, {message: "Виберіть категорію товару"}),
    subType: z.string().min(1, {message: "Виберіть підкатегорію товару"}),
});