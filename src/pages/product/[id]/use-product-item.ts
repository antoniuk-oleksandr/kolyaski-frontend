import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import {getProductByIdRequest} from "@/api/get-product-by-id-request";
import {ProductResponseData} from "@/types/ProductResponseData";

export const useProductItem = () => {
    const [productItem, setProductItem] = useState<null | ProductResponseData>(null);
    const router = useRouter();

    useEffect(() => {
        if(!router.isReady) return;

        const getData = async () => {
            const id = parseInt(router.query.id as string);
            const response = await getProductByIdRequest(id);
            setProductItem(response);
        }

        getData();
    }, [router]);

    return {productItem};
}