import {z} from "zod";
import {newProductModalSignal} from "@/pages/admin/signals/new-product-modal-signal";
import {AdminModalSignalType} from "@/types/AdminModalSignalType";

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
    subType: z.any(),
});

export const incrementNewProductModalSignal = (type: keyof AdminModalSignalType) => {
    newProductModalSignal.value = {
        ...newProductModalSignal.value,
        [type]: ++newProductModalSignal.value[type],
    };
};

export const newProductFilesScheme = z.object({
   files: z.array(z.any()).min(1, {message: "Додайте хоча б один файл"})
});