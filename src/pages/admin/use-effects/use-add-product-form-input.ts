import {Dispatch, MutableRefObject, SetStateAction, useEffect} from "react";
import axios, {CancelTokenSource} from "axios";
import {getProductsRequest} from "@/api/get-products-request";
import {ProductData} from "@/types/ProductData";

export const useAddProductInput = (
    value: string,
    cancelTokenRef: MutableRefObject<null | CancelTokenSource>,
    receivedProducts: Dispatch<SetStateAction<ProductData[] | null>>
) => {
    useEffect(() => {
        if (!value) return;

        if (cancelTokenRef.current) cancelTokenRef.current?.cancel();
        cancelTokenRef.current = axios.CancelToken.source();

        const getData = async () => {
            const response = await getProductsRequest(value, cancelTokenRef);
            console.log(response);
            receivedProducts(response.products);
        }

        getData();

        return () => {
            if (cancelTokenRef.current) cancelTokenRef.current.cancel();
        }
    }, [value]);
}