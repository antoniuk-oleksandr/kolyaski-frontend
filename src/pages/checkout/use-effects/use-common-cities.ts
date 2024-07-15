import {useEffect, useState} from "react";
import {City} from "@/types/City";
import {getCityRequest} from "@/api/get-city-request";

export const useCommonCities = () => {
    const cityNames = ["Київ", "Харків", "Одеса", "Дніпро", "Запоріжжя", "Львів", "Сміла"];
    const [commonCities, setCommonCities] = useState<null | City[]>(null);

    useEffect(() => {
        const getData = async () => {
            const cityArr = await Promise.all(cityNames.map(async (cityName) => {
                return (await getCityRequest(cityName, null))[0];
            }));

            setCommonCities(cityArr);
        }

        getData();
    }, []);

    return {commonCities};
}