import axios from "axios";
import {TokenInfo} from "@/types/TokenInfo";
import {getIpAddress} from "@/utils/utils";

export const postSignInRequest = async (data: any) => {
    const host = getIpAddress();
    const url = `http://${host}/api/admin/sign-in`;

    try {
        const response = await axios.post(url, data);
        return {
            data: response.data as TokenInfo,
        }
    } catch (error) {
        console.error(error);
        return {data: null};
    }
}