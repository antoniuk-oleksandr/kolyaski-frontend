import {getHost} from "@/utils/utils";
import axios from "axios";
import {OrdersSortByEnum} from "@/types/OrdersSortByEnum";
import {SortOrderEnum} from "@/types/SortOrderEnum";

export const getAllOrdersRequest = async (
    token: string,
    page: number,
    value: string,
    sortBy: OrdersSortByEnum,
    sortOrder: SortOrderEnum,
) => {
    const host = getHost();
    const url = `http://${host}/api/admin/orders?page=${page}&sortBy=${sortBy}&sortOrder=${sortOrder}${value === "" ? "" : `&value=${value}`}`;

    try {
        const response = await axios.get(url, {
            headers: {Authorization: `Bearer ${token}`}
        });
        console.log(response);
        return response;
    } catch (error) {
        return {
            data: null,
            status: (error as any).response.status
        }
    }
}