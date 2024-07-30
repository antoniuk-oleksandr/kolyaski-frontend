import axios from "axios";
import {getHost} from "@/utils/utils";
import {SalesData} from "@/types/SalesData";

export const getSalesInfoRequest = async (token: string) => {
    const host = getHost();
    const url = `http://${host}/api/admin/sales-info`;

    try {
        const response = await axios.get(url, {
            headers: {Authorization: `Bearer ${token}`},
        });
        return response.data as SalesData;
    } catch (error) {
        // @ts-ignore
        console.error(error.response);
        return null;
    }
}