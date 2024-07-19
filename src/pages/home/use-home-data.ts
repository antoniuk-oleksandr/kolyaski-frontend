import {useEffect, useState} from "react";
import {HomeData} from "@/types/HomeData";
import {getHomeRequest} from "@/api/get-home-request";

export const useHomeData = () => {
    const [homeData, setHomeData] = useState<HomeData | null>(null);

    useEffect(() => {
        const getData = async () => {
            const data = await getHomeRequest();
            setHomeData(data);
        }

        getData();
    }, []);

    return {homeData};
}