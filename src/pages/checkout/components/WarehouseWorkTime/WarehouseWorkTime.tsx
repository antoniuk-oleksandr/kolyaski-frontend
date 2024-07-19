import WarehouseWorkTimeLayout from "./WarehouseWorkTimeLayout";
import {Warehouse} from "@/types/Warehouse";
import WarehouseWorkTimeElement from "@/pages/checkout/components/WarehouseWorkTimeElement";
import {Key} from "react";

type WarehouseWorkTimeProps = {
    warehouse: Warehouse | undefined,
}

const WarehouseWorkTime = (props: WarehouseWorkTimeProps) => {
    const {warehouse} = props;

    if(warehouse === undefined) return null;
    return (
        <WarehouseWorkTimeLayout {...props}>
            {Object.entries((warehouse as Warehouse).schedule).map((item, index: Key) => (
                <WarehouseWorkTimeElement key={index} schedule={item}/>
            ))}
        </WarehouseWorkTimeLayout>
    )
}

export default WarehouseWorkTime;