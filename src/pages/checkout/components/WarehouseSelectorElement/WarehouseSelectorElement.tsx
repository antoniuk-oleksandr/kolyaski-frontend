import WarehouseSelectorElementLayout from "./WarehouseSelectorElementLayout";
import {Dispatch, SetStateAction, useRef, useState} from "react";
import {Warehouse} from "@/types/Warehouse";
import WarehouseList from "@/pages/checkout/components/WarehouseList/WarehouseList";
import {useWarehouses} from "@/pages/checkout/use-effects/use-warehouses";
import WarehouseSelectedElement from "@/pages/checkout/components/WarehouseSelectedElement/WarehouseSelectedElement";
import {useWarehouseMenu} from "@/pages/checkout/use-effects/use-warehouse-menu";

type WareHouseSelectorElementProps = {
    cityRef: string,
    warehouse: Warehouse | undefined,
    setWarehouse: Dispatch<SetStateAction<Warehouse | undefined>>
    warehouseInputValue: string,
    setWarehouseInputValue: Dispatch<SetStateAction<string>>
    isWarehouseRequestSending: boolean,
    setIsWarehouseRequestSending: Dispatch<SetStateAction<boolean>>
}

const WarehouseSelectorElement = (props: WareHouseSelectorElementProps) => {
    const {cityRef, warehouseInputValue, setWarehouseInputValue, setIsWarehouseRequestSending} = props;
    const inputRef = useRef<HTMLInputElement | null>(null);
    const [warehouseListElement, setWarehouseListElement] = useState<HTMLDivElement | null>(null);
    const [warehouseElement, setWarehouseElement] = useState<HTMLDivElement | null>(null);
    const {isMenuShown, setIsMenuShown} = useWarehouseMenu(warehouseListElement, warehouseElement);
    const {warehouseList} = useWarehouses(cityRef, setIsWarehouseRequestSending);

    return (
        <WarehouseSelectorElementLayout>
            <WarehouseSelectedElement
                setWarehouseElement={setWarehouseElement}
                setIsMenuShown={setIsMenuShown} {...props}
            />
            <WarehouseList
                {...props}
                warehouseElement={warehouseElement}
                setWarehouseListElement={setWarehouseListElement}
                inputRef={inputRef}
                inputValue={warehouseInputValue}
                setInputValue={setWarehouseInputValue}
                warehouseList={warehouseList}
                setIsMenuShown={setIsMenuShown}
                isMenuShown={isMenuShown}
            />
        </WarehouseSelectorElementLayout>
    )
}

export default WarehouseSelectorElement;