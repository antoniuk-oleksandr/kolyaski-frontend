import {getHost} from "@/utils/utils";
import {OrderType} from "@/types/OrderType";
import axios from "axios";

export const patchOrderRequest = async (
    id: number,
    data: OrderType,
    token: string,
) => {
    const host = getHost();
    const url = `http://${host}/api/admin/orders/${id}`;

    try {
        const response = await axios.patch(url, data, {
            headers: {Authorization: `Bearer ${token}`},
        });
        return response.status;
    } catch (error) {
        console.error(error);
        return (error as any).response.status;
    }
}