import {useEffect, useState} from "react";
import {City} from "@/types/City";
import Cookies from "js-cookie";
import {citySignal} from "@/pages/checkout/signals/city-signal";

export const useSelectedCity = (value?: City) => {
    const [selectedCity, setSelectedCity] = useState<City | null>(null);

    useEffect(() => {
        if(value !== undefined){
            setSelectedCity(value);
            return;
        }

        let cityFromCookies = Cookies.get("kolyaskiCity") as string | undefined | City;
        if (cityFromCookies === undefined) {
            cityFromCookies = {
                ref: "8d5a980d-391c-11dd-90d9-001a92567626",
                description: 'м. Київ, Київська обл.',
                cityName: 'Київ',
                regionName: 'Київська oбл.'
            } as City;
        } else cityFromCookies = JSON.parse(cityFromCookies as string) as City;

        setSelectedCity(cityFromCookies);
    }, [])

    useEffect(() => {
        if(selectedCity !== null){
            citySignal.value = selectedCity;
        }
    }, [selectedCity]);

    return {selectedCity, setSelectedCity};
}