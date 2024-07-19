import axios from "axios";
import {getIpAddress} from "@/utils/utils";

export const postContactRequest = async (data: { name: string, email: string, message: string }) => {
    const host = getIpAddress();
    const url = `http://${host}/api/contact`;

    try {
        await axios.post(url, data);
    } catch (error) {
        console.error(error);
    }
}