import {getHost} from "@/utils/utils";
import axios from "axios";

export const postProductFileByCategoriesRequest = async (
    token: string,
    file: File,
    categories: Record<string, string>
) => {
    const host = getHost();
    const url = `http://${host}/api/admin/products/upload-by-categories`;

    const formData = new FormData();
    formData.append("xml", file);

    const categoriesBlob = new Blob([JSON.stringify(categories)], { type: "application/json" });
    formData.append("selectedCategories", categoriesBlob);


    try {
        return await axios.post(url, formData, {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "multipart/form-data"
            }
        });
    } catch (error) {
        return (error as any).response?.status;
    }
}
