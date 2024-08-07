import {useEffect, useState} from "react";
import {Warehouse} from "@/types/Warehouse";
import Cookies from "js-cookie";
import {warehouseSignal} from "@/pages/checkout/signals/warehouse-signal";

export const useWarehouse = (value?: Warehouse) => {
    const [warehouse, setWarehouse] = useState<Warehouse | undefined>();

    useEffect(() => {
        if (value !== undefined) {
            setWarehouse(value);
            return;
        }

        let warehouseFromCookies = Cookies.get("kolyaskiWarehouse") as string | undefined | Warehouse;
        if (warehouseFromCookies === undefined) return;
        warehouseFromCookies = JSON.parse(warehouseFromCookies as string) as Warehouse;
        setWarehouse(warehouseFromCookies);
    }, [])

    useEffect(() => {
        if (warehouse !== undefined || warehouse !== null) {
            warehouseSignal.value = warehouse as Warehouse;
        }
    }, [warehouse]);

    return {warehouse, setWarehouse};
}