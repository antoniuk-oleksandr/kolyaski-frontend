import {useEffect} from "react";
import {useRouter} from "next/router";

//value
//type
//priceFrom
//priceTo

export const useProducts = () => {
    const router = useRouter();

    useEffect(() => {
        if(!router.isReady) return;

        console.log(router.query);

    }, [router]);
}