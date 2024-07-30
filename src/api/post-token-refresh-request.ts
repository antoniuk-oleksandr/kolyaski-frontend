import {getHost} from "@/utils/utils";
import axios from "axios";

export const postTokenRefreshRequest = async (refreshToken: string) => {
    const host = getHost();
    const url = `http://${host}/api/token/refresh`;

    try {
        const response = await axios.post(url, {}, {
            headers: {Authorization: `Bearer ${refreshToken}`},
        });
        return response.data;
    } catch (error) {
        // @ts-ignore
        console.error(error.response);
    }
}