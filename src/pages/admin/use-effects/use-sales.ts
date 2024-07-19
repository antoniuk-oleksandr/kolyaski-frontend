import {useEffect} from "react";
import {getSalesInfo} from "@/api/get-sales-info";

export const useSales = () => {

    useEffect(() => {
        const getData = async () => {
            const response = await getSalesInfo();
            console.log(response);
        }

        getData();
    }, []);
}