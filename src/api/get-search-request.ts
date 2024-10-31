import {getEnumKeyByValue, getHost, makeSearchParams} from "@/utils/utils";
import axios from "axios";
import { CatalogSlice } from "@/types/CatalogSlice";
import {SortEnum} from "@/types/SortEnum";

export const getSearchRequest = async (
    catalogSlice: CatalogSlice,
) => {
    let copy = {...catalogSlice};
    copy.sortType = getEnumKeyByValue(SortEnum, catalogSlice.sortType as string) as string;

    const host = getHost();
    const params = makeSearchParams(copy);

    const url = `http://${host}/api/search?${params}`;

    try {
        const response = await axios.get(url);

        console.log(response.data);
        

        return response.data;
    }
    catch (error) {
        console.error(error);
    }
}
