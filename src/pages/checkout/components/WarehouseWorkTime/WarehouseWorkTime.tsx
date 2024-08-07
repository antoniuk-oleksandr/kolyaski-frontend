import WarehouseWorkTimeLayout from "./WarehouseWorkTimeLayout";
import {Warehouse} from "@/types/Warehouse";
import WarehouseWorkTimeElement from "@/pages/checkout/components/WarehouseWorkTimeElement";
import {Key} from "react";

type WarehouseWorkTimeProps = {
    warehouse: Warehouse | undefined,
    renderWorkTime?: boolean,
}

const WarehouseWorkTime = (props: WarehouseWorkTimeProps) => {
    const {warehouse, renderWorkTime} = props;

    if (warehouse === undefined) return null;
    if (!warehouse.schedule) return;
    if(renderWorkTime === false) return null;
    return (
        <WarehouseWorkTimeLayout {...props}>
            {Object.entries((warehouse).schedule).map((item, index: Key) => (
                <WarehouseWorkTimeElement key={index} schedule={item}/>
            ))}
        </WarehouseWorkTimeLayout>
    )
}

export default WarehouseWorkTime;