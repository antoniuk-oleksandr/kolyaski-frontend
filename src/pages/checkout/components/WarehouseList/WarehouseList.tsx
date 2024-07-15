import WarehouseListLayout from "./WarehouseListLayout";
import {Warehouse} from "@/types/Warehouse";
import {Dispatch, Key, MutableRefObject, SetStateAction} from "react";
import {handleWareHouseSelect} from "@/pages/checkout/handlers";
import WareHouseSelectorElementInput from "@/pages/checkout/components/WareHouseSelectorElementInput";
import NoWarehousesMessage from "@/pages/checkout/components/NoWarehousesMessage";

type WarehouseListProps = {
    warehouseList: undefined | Warehouse[],
    isMenuShown: boolean,
    setIsMenuShown: Dispatch<SetStateAction<boolean>>,
    setWarehouse: Dispatch<SetStateAction<Warehouse | undefined>>,
    setInputValue: Dispatch<SetStateAction<string>>,
    inputValue: string,
    inputRef: MutableRefObject<HTMLInputElement | null>,
    setWarehouseListElement: Dispatch<SetStateAction<HTMLDivElement | null>>,
}

const WarehouseList = (props: WarehouseListProps) => {
    const {
        warehouseList,
        setIsMenuShown,
        setWarehouse,
        setInputValue,
        inputValue,
        inputRef,
    } = props;
    const filteredList = warehouseList?.filter((item) => item.warehouse.includes(inputValue));

    return (
        <WarehouseListLayout {...props}>
            <WareHouseSelectorElementInput
                {...props}
            />
            {filteredList && filteredList.map((warehouse, index: Key) => (
                <button
                    type={"button"}
                    onClick={() =>
                        handleWareHouseSelect(setWarehouse, warehouse, setIsMenuShown, setInputValue, inputRef)}
                    onPointerDown={(e) => e.preventDefault()}
                    key={index}
                    className={"p-3 text-sm hover:bg-neutral-100 w-full outline-none text-start cursor-pointer"}
                >{warehouse.warehouse}</button>
            ))}
            <NoWarehousesMessage filteredList={filteredList} />
        </WarehouseListLayout>
    )
}

export default WarehouseList;