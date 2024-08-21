import {getHost} from "@/utils/utils";
import axios from "axios";
import {ProductData} from "@/types/ProductData";

export const patchProductRequest = async (
    id: number,
    data: ProductData,
    token: string,
) => {
    const host = getHost();
    const url = `http://${host}/api/admin/products/${id}`;

    try {
        const response = await axios.patch(url, data, {
            headers: {'Authorization': `Bearer ${token}`}
        });
        return response.status;
    } catch (error) {
        console.error(error);
        return (error as any).response.status;
    }
}