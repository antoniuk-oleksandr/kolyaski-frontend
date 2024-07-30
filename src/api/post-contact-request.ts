import axios from "axios";
import {getHost} from "@/utils/utils";

export const postContactRequest = async (data: { name: string, email: string, message: string }) => {
    const host = getHost();
    const url = `http://${host}/api/comment`;

    try {
        await axios.post(url, data);
    } catch (error) {
        console.error(error);
    }
}