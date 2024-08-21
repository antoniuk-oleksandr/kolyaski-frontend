import {getHost} from "@/utils/utils";
import {MutableRefObject} from "react";
import axios, {CancelTokenSource} from "axios";

export const getProductsRequest = async (
    value: string,
    cancelTokenRef: MutableRefObject<null | CancelTokenSource>,
) => {
    const host = getHost();
    const url = `http://${host}/api/search?value=${value}`;

    if(!cancelTokenRef.current) return null;
    try {
        const response = await axios.get(url, {
            cancelToken: cancelTokenRef.current?.token,
        });
        return response.data;
    }
    catch (error) {
        return null;
    }
}