import WarehouseSelectorLayout from "./WarehouseSelectorLayout";
import WarehouseSelectorElement from "@/pages/checkout/components/WarehouseSelectorElement/WarehouseSelectorElement";
import {Dispatch, SetStateAction} from "react";
import {Warehouse} from "@/types/Warehouse";
import WarehouseWorkTime from "@/pages/checkout/components/WarehouseWorkTime/WarehouseWorkTime";

type WarehouseSelector = {
    cityRef: string,
    warehouse: Warehouse | undefined,
    setWarehouse: Dispatch<SetStateAction<Warehouse | undefined>>
    warehouseInputValue: string,
    setWarehouseInputValue: Dispatch<SetStateAction<string>>
    isWarehouseRequestSending: boolean,
    setIsWarehouseRequestSending: Dispatch<SetStateAction<boolean>>
}

const WareHouseSelector = (props: WarehouseSelector) => {
    return (
        <WarehouseSelectorLayout>
            <p>Самовивіз з Нової Пошти</p>
            <WarehouseSelectorElement {...props}/>
            <WarehouseWorkTime {...props}/>
        </WarehouseSelectorLayout>
    )
}

export default WareHouseSelector;