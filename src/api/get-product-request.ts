import axios from "axios";

export const getProductRequest = async (id: number) => {
    const url = `http://localhost:8080/api/product/${id}`;

    try {
        const response = await axios.get(url);
        return response.data;
    }
    catch (error){console.error(error)}
}