import {useEffect, useState} from "react";
import {HomeData} from "@/types/HomeData";
import {getHomeRequest} from "@/api/get-home-request";
import {removeProductsWithNullImages} from "@/pages/home/helpers";

export const useHomeData = () => {
    const [homeData, setHomeData] = useState<HomeData | null>(null);

    useEffect(() => {
        const getData = async () => {
            const data = await getHomeRequest();
            console.log(data);
            let formattedData = removeProductsWithNullImages(data);
            setHomeData(formattedData);
        }

        getData();
    }, []);

    return {homeData};
}