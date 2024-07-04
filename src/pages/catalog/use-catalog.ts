import {useEffect, useState} from "react";
import {useRouter} from "next/router";
import {SearchParams} from "@/types/SearchParams";
import {capitalizeFirstLetter} from "@/utils/utils";
import {SortEnum} from "@/types/SortEnum";
import {handleProductSortTypeChange} from "./handlers";
import {getProductsPageTitle} from "./helpers";

export const useCatalog = () => {
    const [searchParams, setSearchParams] = useState<SearchParams | null>(null);
    const [products, setProducts] = useState(null);
    const router = useRouter();

    useEffect(() => {
        if (!router.isReady) return;

        if (router.query.sortType === undefined) {
            handleProductSortTypeChange(SortEnum.POPULARITY, router, router.query as unknown as SearchParams);
            return;
        }

        setSearchParams({
            ...router.query as unknown as SearchParams,
            page: parseInt(router.query.page as string),
            priceFrom: parseInt(router.query.priceFrom as string),
            priceTo: parseInt(router.query.priceTo as string),
            sortType: capitalizeFirstLetter(router.query.sortType as string) as SortEnum,
        });

        document.title = getProductsPageTitle(router.query as unknown as SearchParams);
    }, [router]);

    return {searchParams, products}
}