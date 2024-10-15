import {getHost} from "@/utils/utils"
import axios from "axios";

export const postCategoriesRequest = async (
    token: string,
    file: File,
) => {
    const host = getHost();

    const url = `http://${host}/api/admin/products/upload-categories`;

    try {
        return await axios.post(url, {xml: file}, {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'multipart/form-data'
            }
        });
    }
    catch (error) {
        console.error(error);
        return {
            data: null,
            status: (error as any).response.status
        };
    }
}