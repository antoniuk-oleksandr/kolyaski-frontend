import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import {pageTitles} from "@/common-components/Header/page-titles";

export const useCurrentPage = () => {
    const [currentPage, setCurrentPage] = useState<string | null>(null);
    const router = useRouter();

    useEffect(() => {
        if(!router.isReady) return;

        setCurrentPage(router.route);
        const additionalText = ' - Купити коляски в дитячому інтернет-магазині'
        // @ts-ignore
        document.title = pageTitles[router.route] + additionalText;
    }, [router]);

    return {currentPage};
}