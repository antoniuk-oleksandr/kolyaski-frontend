import axios from "axios";
import {getHost} from "@/utils/utils";

export const postOrderRequest = async (body: any)  => {
    const host = getHost();
    const url = `http://${host}/api/order`;

    try {
        await axios.post(url, body);
    }
    catch (error) {console.error(error)}
}