import {useEffect, useState} from "react";
import {useRouter} from "next/router";
import {SearchParams} from "@/types/SearchParams";
import {getProductsPageTitle} from "@/pages/products/helpers";
import {capitalizeFirstLetter} from "@/utils/utils";
import {SortEnum} from "@/types/SortEnum";
import {handleProductSortTypeChange} from "@/pages/products/handlers";

export const useProducts = () => {
    const [searchParams, setSearchParams] = useState<SearchParams | null>(null);
    const router = useRouter();

    useEffect(() => {
        if (!router.isReady) return;

        if(router.query.sortType === undefined){
            handleProductSortTypeChange(SortEnum.ByPopularity, router, router.query as SearchParams)
            return;
        }

        setSearchParams({
            ...router.query as SearchParams,
            sortType: capitalizeFirstLetter(router.query.sortType as string) as SortEnum,
        });

        document.title = getProductsPageTitle(router.query as SearchParams);
    }, [router]);

    return {searchParams}
}