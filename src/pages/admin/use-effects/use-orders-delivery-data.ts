import {useEffect} from "react";
import {City} from "@/types/City";
import {Warehouse} from "@/types/Warehouse";

export const useOrdersDeliveryData = (
    setValue: any,
    selectedCity: City | null,
    warehouse: Warehouse | undefined
) => {
    useEffect(() => {
        setValue("delivery", {
            city: selectedCity,
            warehouse,
        });
    }, [selectedCity, warehouse]);
}