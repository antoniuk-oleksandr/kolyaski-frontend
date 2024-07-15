import axios from "axios";

export const postOrderRequest = async (body: any)  => {
    const url = "http://localhost:8080/api/order";

    try {
        await axios.post(url, body);
    }
    catch (error) {console.error(error)}
}