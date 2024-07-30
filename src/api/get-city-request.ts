import {MutableRefObject} from "react";
import axios, {CancelTokenSource} from "axios";
import {getHost} from "@/utils/utils";

export const getCityRequest = async (
    cityInput: string,
    cancelToken: MutableRefObject<CancelTokenSource | null> | null,
) => {
    const host = getHost();
    const url = `http://${host}/api/novaposhta/cities?partName=${cityInput}`;

    try {
        const response = await axios.get(url, {
            cancelToken: cancelToken ? cancelToken.current?.token : undefined,
        });
        return response.data.data;
    } catch (error) {
    }
}