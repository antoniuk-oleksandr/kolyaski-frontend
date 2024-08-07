import axios from "axios";
import {getHost} from "@/utils/utils";

export const getProductByIdRequest = async (id: number) => {
    const host = getHost();
    const url = `http://${host}/api/product/${id}`;

    try {
        const response = await axios.get(url);
        console.log(response.data);
        return response.data;
    }
    catch (error){console.error(error)}
}