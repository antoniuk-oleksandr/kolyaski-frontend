import {SearchParams} from "@/types/SearchParams";
import {getEnumKeyByValue, getHost} from "@/utils/utils";
import {SortEnum} from "@/types/SortEnum";
import axios from "axios";
import {tryToRemovePrice} from "@/pages/catalog/helpers";

export const getSearchRequest = async (searchParams: SearchParams) => {
    const paramsCopy = {...searchParams};
    if (paramsCopy.sortType !== undefined) {
        paramsCopy.sortType = getEnumKeyByValue(SortEnum, paramsCopy.sortType) as SortEnum;
    }
    tryToRemovePrice(paramsCopy);
    const res = new URLSearchParams(paramsCopy as unknown as Record<string, string>);
    const host = getHost();
    const url = `http://${host}/api/search?${res.toString()}`;

    console.log(url);

    try {
        const response = await axios.get(url);
        return response.data;
    }
    catch (error) {
        console.error(error);
    }
}