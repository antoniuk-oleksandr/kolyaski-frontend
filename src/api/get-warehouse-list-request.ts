import axios from "axios";
import {getHost} from "@/utils/utils";

export const getWarehouseListRequest = async (cityRef: string) => {
    const host = getHost();
    const url = `http://${host}/api/novaposhta/warehouses?cityRef=${cityRef}`;

    try {
        const response = await axios.get(url);
        return response.data;
    }
    catch (error){console.error(error)}
}