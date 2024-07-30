import {getHost} from "@/utils/utils";
import axios from "axios";

export const deleteCommentRequest = async (
    token: string,
    id: number,
) => {
    const host = getHost();
    const url = `http://${host}/api/admin/comments/${id}`;

    try {
        const response = await axios.delete(url, {
            headers: {Authorization: `Bearer ${token}`},
        });
        return response.data;
    } catch (error) {
        console.error(error);
        return null;
    }
}