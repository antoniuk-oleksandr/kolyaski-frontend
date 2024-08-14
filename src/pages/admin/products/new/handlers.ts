import {Dispatch, SetStateAction} from "react";
import {NextRouter} from "next/router";
import {ProductData} from "@/types/ProductData";

export const handleNewProductButtonSubmit = async (
    setSending: Dispatch<SetStateAction<boolean>>,
    router: NextRouter,
    data: ProductData,
) => {
    setSending(true);
    await router.push("/admin/products");
    setSending(false);
}