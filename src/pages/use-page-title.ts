import {useEffect, useState} from "react";
import {NextRouter} from "next/router";
import {getPageTitle} from "@/utils/utils";

export const usePageTitle = (router: NextRouter) => {
    const [pageTitle, setPageTitle] = useState<string | null>(null);

    useEffect(() => {
        if (!router.isReady) return;

        const value = getPageTitle(router);
        setPageTitle(value);
    }, [router]);

    return {pageTitle};
}