import {useEffect, useState} from "react";
import {getSearchRequest} from "@/api/get-search-request";
import {SearchParams} from "@/types/SearchParams";
import {CatalogData} from "@/types/CatalogData";

export const useCatalogProducts = (searchParams: SearchParams | null) => {
    const [catalogData, setCatalogData] = useState<CatalogData | null>(null);

    useEffect(() => {
        if (!searchParams) return;

        const getData = async () => {
            const response = await getSearchRequest(searchParams);
            setCatalogData(response);
        }

        getData();
    }, [searchParams]);

    return {catalogData};
}