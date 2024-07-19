import axios from "axios";
import {getIpAddress} from "@/utils/utils";

export const postOrderRequest = async (body: any)  => {
    const host = getIpAddress();
    const url = `http://${host}/api/order`;

    try {
        await axios.post(url, body);
    }
    catch (error) {console.error(error)}
}