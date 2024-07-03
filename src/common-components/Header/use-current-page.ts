import {useRouter} from "next/router";
import {useEffect, useState} from "react";

export const useCurrentPage = () => {
    const [currentPage, setCurrentPage] = useState<string | null>(null);
    const router = useRouter();

    useEffect(() => {
        if(!router.isReady) return;

        setCurrentPage(router.route);
    }, [router]);

    return {currentPage};
}