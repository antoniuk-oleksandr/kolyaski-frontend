import axios, {AxiosError} from "axios";
import {getHost} from "@/utils/utils";

export const getCommentsRequest = async (
    token: string,
    value: string | null,
    page: number
) => {
    const host = getHost();
    let url = `http://${host}/api/admin/comments?value=${value}&page=${page}`;

    try {
        const {data, status} = await axios.get(url, {
            headers: {Authorization: `Bearer ${token}`},
        });
        return {
            ...data,
            status: status,
        };
    } catch (error) {
        return {
            totalCommentsCount: null,
            commentsOnPageCount: null,
            comments: null,
            status: (error as AxiosError).response?.status,
        }
    }
}