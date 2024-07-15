import {Dispatch, SetStateAction, useEffect, useState} from "react";
import {Warehouse} from "@/types/Warehouse";
import {getWarehouseListRequest} from "@/api/get-warehouse-list-request";

export const useWarehouses = (
    cityRef: string,
    setIsWarehouseRequestSending: Dispatch<SetStateAction<boolean>>
) => {
    const [warehouseList, setWarehouseList] = useState<undefined | Warehouse[]>();


    useEffect(() => {
        const getData = async () => {
            setIsWarehouseRequestSending(true);
            const response = await getWarehouseListRequest(cityRef);
            setWarehouseList(response.warehouses);
            setIsWarehouseRequestSending(false);
        }

        getData();
    }, [cityRef]);

    return {warehouseList}
}