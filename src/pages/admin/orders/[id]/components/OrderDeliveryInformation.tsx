import CitySelectorContainer from "@/pages/checkout/components/CitySelectorContainer/CitySelectorContainer";
import CitySelector from "@/pages/checkout/components/CitySelector/CitySelector";
import WareHouseSelector from "@/pages/checkout/components/WarehouseSelector/WarehouseSelector";
import {useSelectedCity} from "@/pages/checkout/use-effects/use-selected-city";
import {useWarehouse} from "@/pages/checkout/use-effects/use-warehouse";
import {useEffect, useState} from "react";
import {City} from "@/types/City";
import {OrderType} from "@/types/OrderType";
import OrderComponentLayout from "@/pages/admin/orders/[id]/components/OrderComponentLayout";
import {useFormContext} from "react-hook-form";
import {useOrdersDeliveryData} from "@/pages/admin/use-effects/use-orders-delivery-data";

type OrderDeliveryInformationProps = {
    commonCities: City[],
    orderById: OrderType,
}

const OrderDeliveryInformation = (props: OrderDeliveryInformationProps) => {
    const {commonCities, orderById} = props;
    const [warehouseInputValue, setWarehouseInputValue] = useState<string>("");
    const [isWarehouseRequestSending, setIsWarehouseRequestSending] = useState(true);

    const {warehouse, setWarehouse} = useWarehouse(orderById.delivery.warehouse);
    const {selectedCity, setSelectedCity} = useSelectedCity(orderById.delivery.city);
    const {setValue} = useFormContext();

    useOrdersDeliveryData(setValue, selectedCity, warehouse);

    if(!selectedCity) return null;
    return (
        <OrderComponentLayout>
            <h2 className="text-lg font-semibold">Інформація про доставку</h2>
            <CitySelectorContainer selectedCity={selectedCity}/>
            <CitySelector
                commonCities={commonCities}
                setWarehouseInputValue={setWarehouseInputValue}
                setWarehouse={setWarehouse}
                selectedCity={selectedCity}
                setSelectedCity={setSelectedCity}
            />
            <WareHouseSelector
                renderWorkTime={false}
                setIsWarehouseRequestSending={setIsWarehouseRequestSending}
                isWarehouseRequestSending={isWarehouseRequestSending}
                setWarehouseInputValue={setWarehouseInputValue}
                warehouseInputValue={warehouseInputValue}
                warehouse={warehouse}
                setWarehouse={setWarehouse}
                cityRef={selectedCity.ref}
            />

        </OrderComponentLayout>
    )
}

export default OrderDeliveryInformation;