import {getHost} from "@/utils/utils";
import axios from "axios";

export const patchCommentsRequest = async (
    token: string,
    id: number,
    value: boolean,
) => {
    const host = getHost();
    const url = `http://${host}/api/admin/comments/${id}?isUnread=${value}`;

    try {
        const response = await axios.patch(url, {}, {
            headers: {Authorization: `Bearer ${token}`},
        });
        return response.data;
    } catch (error) {
        console.error(error);
        return null;
    }
}