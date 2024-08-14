import axios from "axios";
import {TokenInfo} from "@/types/TokenInfo";
import {getHost} from "@/utils/utils";

export const postSignInRequest = async (data: any) => {
    const host = getHost();
    const url = `http://${host}/api/admin/sign-in`;
    try {
        const response = await axios.post(url, data, {});
        return {
            status: response.status,
            data: response.data as TokenInfo,
        }
    } catch (error) {
        return {
            status: (error as any).response.status,
            data: null
        };
    }
}