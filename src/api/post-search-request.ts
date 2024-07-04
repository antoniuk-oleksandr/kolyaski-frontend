import {SearchParams} from "@/types/SearchParams";
import {getEnumKeyByValue} from "@/utils/utils";
import {SortEnum} from "@/types/SortEnum";

const postSearchRequest = (params: SearchParams) => {
    if(params.sortType !== undefined) {
        params.sortType = getEnumKeyByValue(SortEnum, params.sortType) as SortEnum;
    }

    const url = 'http://localhost:8080/search';
}