import axios from "axios";
import {getIpAddress} from "@/utils/utils";

export const getProductRequest = async (id: number) => {
    const host = getIpAddress();
    const url = `http://${host}/api/product/${id}`;

    try {
        const response = await axios.get(url);
        console.log(response.data);
        return response.data;
    }
    catch (error){console.error(error)}
}