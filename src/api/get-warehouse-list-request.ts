import axios from "axios";

export const getWarehouseListRequest = async (cityRef: string) => {
    const url = `http://localhost:8080/api/novaposhta/warehouses?cityRef=${cityRef}`;

    try {
        const response = await axios.get(url);
        return response.data;
    }
    catch (error){console.error(error)}
}