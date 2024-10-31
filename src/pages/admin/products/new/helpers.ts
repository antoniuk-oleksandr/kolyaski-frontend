import {z} from "zod";
import {newProductModalSignal} from "@/pages/admin/signals/new-product-modal-signal";
import {AdminModalSignalType} from "@/types/AdminModalSignalType";
import {Dispatch, SetStateAction} from "react";
import {CategoryCheckboxMap} from "@/types/CategoryCheckboxMap";
import {sidebarItemListText} from "@/common-components/SidebarItemList/sidebar-Item-list-text";

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

export const toggleCategorySelection = (
    category: string,
    setSelectedCategories: Dispatch<SetStateAction<CategoryCheckboxMap | null>>,
    value?: boolean
) => {
    setSelectedCategories((prevCategories) => ({
        ...prevCategories,
        [category]: value === undefined
            ? {
                ...prevCategories!![category],
                isSelected: !prevCategories!![category].isSelected
            }
            : {
                ...prevCategories!![category],
                isSelected: value,
            },
    }));
};

export const selectCategory = (
    foreignCategory: string,
    selectedCategory: string,
    setSelectedCategories: Dispatch<SetStateAction<CategoryCheckboxMap | null>>,
) => {
    setSelectedCategories((prevCategories) => ({
        ...prevCategories,
        [foreignCategory]: {
            ...prevCategories!![foreignCategory],
            option: selectedCategory,
        }
    }));
};

export const getCategoryCheckboxMap = (
    categories: string[],
    defaultOption: string,
) => {
    return categories.reduce((acc, item) => {
        acc[item] = {isSelected: false, option: defaultOption};
        return acc;
    }, {} as CategoryCheckboxMap)
}

export const selectAllCategories = (
    setSelectedCategories: Dispatch<SetStateAction<CategoryCheckboxMap | null>>,
    value: boolean,
) => {
    setSelectedCategories((prevCategories) => {
        const newCategories = {...prevCategories};
        Object.keys(newCategories).forEach((key) => {
            newCategories[key].isSelected = value;
        });
        return newCategories;
    });
}

export const getSelectOptions = () => {
    return sidebarItemListText.reduce((acc, item) => {
        acc.push(item.text);
        return acc;
    }, [] as string[])
}

export const makeCategoryMap = (selectedCategories: CategoryCheckboxMap) => {
    return Object.entries(selectedCategories).reduce((acc, [key, value]) => {
        if (value.isSelected) acc[key] = value.option
        return acc;
    }, {} as Record<string, string>)
}

export const clearNewProductModal = (
    setSelectedCategories: Dispatch<SetStateAction<CategoryCheckboxMap | null>>,
    reset: () => void,
) => {
    incrementNewProductModalSignal("close");
    new Promise(_ => {
        setTimeout(() => {
            reset();
            setSelectedCategories(null);
        }, 100)
    })
}