import axios from "axios";
import {getIpAddress} from "@/utils/utils";

export const getSalesInfo = async (token: string) => {
    const host = getIpAddress();
    const url = `http://${host}/api/admin/sales-info`;

    try {
        const response = await axios.get(url, {
            headers: {Authorization: `Bearer ${token}`},
        });
        return response.data;
    } catch (error) {
        console.error(error)
    }
}