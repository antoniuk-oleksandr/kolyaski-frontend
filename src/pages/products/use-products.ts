import {useEffect, useState} from "react";
import {useRouter} from "next/router";
import {SearchParams} from "@/types/SearchParams";
import {getProductsPageTitle} from "@/pages/products/helpers";

export const useProducts = () => {
    const [searchParams, setSearchParams] = useState<SearchParams | null>(null);
    const router = useRouter();

    useEffect(() => {
        if (!router.isReady) return;

        setSearchParams(router.query as SearchParams);
        document.title = getProductsPageTitle(router.query as SearchParams);
    }, [router]);

    return {searchParams}
}