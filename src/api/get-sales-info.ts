import axios from "axios";
import {getIpAddress} from "@/utils/utils";

export const getSalesInfo = async () => {
    const host = getIpAddress();
    const url = `http://${host}/api/admin/sales-info`;

    try {
        const response = await axios.get(url);
        return response.data;
    }
    catch (error) {console.error(error)}
}