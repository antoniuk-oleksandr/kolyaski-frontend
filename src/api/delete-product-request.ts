import {getHost} from "@/utils/utils";
import axios from "axios";

export const deleteProductRequest = async (
    id: number,
    token: string,
) => {
    const host = getHost();
    const url = `http://${host}/api/admin/products/${id}`;

    try {
        await axios.delete(url, {
            headers: {Authorization: `Bearer ${token}`,},
        });
    } catch (e) {
        console.log(e);
    }
}