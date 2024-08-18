import {getHost} from "@/utils/utils";
import axios from "axios";

export const deleteProductRequest = async (
    id: number,
    token: string,
) => {
    const host = getHost();
    const url = `http://${host}/api/admin/products/${id}`;

    try {
        const response = await axios.delete(url, {
            headers: {Authorization: `Bearer ${token}`,},
        });
        return response.status;
    } catch (error) {
        console.log(error);
        return (error as any).response.status;
    }
}