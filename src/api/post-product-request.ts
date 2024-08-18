import { ProductData } from "@/types/ProductData";
import {getHost} from "@/utils/utils";
import axios from "axios";

export const postProductRequest = async (
    data: ProductData,
    token: string,
) => {
    const host = getHost();
    const url = `http://${host}/api/admin/product`;

    try {
        const response = await axios.post(url, data, {
           headers: {Authorization: `Bearer ${token}`}
        });
        return response.status;
    }
    catch (error) {
        console.log(error);
        return (error as any).response.status;
    }
}