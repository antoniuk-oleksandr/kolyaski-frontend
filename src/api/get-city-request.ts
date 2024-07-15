import {MutableRefObject} from "react";
import axios, {CancelTokenSource} from "axios";

export const getCityRequest = async (
    cityInput: string,
    cancelToken: MutableRefObject<CancelTokenSource | null> | null,
) => {
    const url = `http://localhost:8080/api/novaposhta/cities?partName=${cityInput}`;

    try {
        const response = await axios.get(url, {
            cancelToken: cancelToken ? cancelToken.current?.token : undefined,
        });
        return response.data.data;
    } catch (error) {
    }
}