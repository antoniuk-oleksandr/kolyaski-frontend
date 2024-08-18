import {getHost} from "@/utils/utils"
import axios from "axios";

export const postProductFileRequest = async (
    file: File,
    token: string
) => {
    const host = getHost();
    const url = `http://${host}/api/admin/products-xml`;

    try {
        const response = await axios.post(url, {xml: file}, {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'multipart/form-data'
            }
        });
        return response.status;
    } catch (error) {
        return (error as any).response.status;
    }
}