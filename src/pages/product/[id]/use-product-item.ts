import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import {ProductData} from "@/types/ProductData";
import {getProductRequest} from "@/api/get-product-request";

export const useProductItem = () => {
    const [productItem, setProductItem] = useState<null | ProductData>(null);
    const router = useRouter();

    useEffect(() => {
        if(!router.isReady) return;

        const getData = async () => {
            const id = parseInt(router.query.id as string);
            const response = await getProductRequest(id);
            setProductItem(response);
        }

        getData();
    }, [router]);

    return {productItem};
}