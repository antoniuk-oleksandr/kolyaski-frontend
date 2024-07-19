import {useEffect, useState} from "react";
import {useRouter} from "next/router";

export const useAdminPage = () => {
    const [page, setPage] = useState("");
    const router = useRouter();

    useEffect(() => {
        if (!router.isReady) return;

        setPage(router.pathname);
    }, [router]);

    return {page};
}