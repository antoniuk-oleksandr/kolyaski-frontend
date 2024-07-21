import {getIpAddress} from "@/utils/utils";
import axios from "axios";

export const postTokenRefreshRequest = async (refreshToken: string) => {
    const host = getIpAddress();
    const url = `http://${host}/api/token/refresh`;

    try {
        const response = await axios.post(url, {}, {
            headers: {Authorization: `Bearer ${refreshToken}`},
        });
        return response.data;
    } catch (error) {
        console.error(error)
    }
}