import MessageFormInput from "@/pages/contacts/components/MessageFormInput/MessageFormInput";
import CitySelectorContainer from "@/pages/checkout/components/CitySelectorContainer/CitySelectorContainer";
import CitySelector from "@/pages/checkout/components/CitySelector/CitySelector";
import WareHouseSelector from "@/pages/checkout/components/WarehouseSelector/WarehouseSelector";
import {useSelectedCity} from "@/pages/checkout/use-effects/use-selected-city";
import DeliveryBlockLayout from "./DeliveryBlockLayout";
import {useWarehouse} from "@/pages/checkout/use-effects/use-warehouse";
import {useState} from "react";
import {City} from "@/types/City";

type DeliveryBlockProps = {
    commonCities: City[],
}

const DeliveryBlock = (props: DeliveryBlockProps) => {
    const {commonCities} = props;
    const {selectedCity, setSelectedCity} = useSelectedCity();
    const {warehouse, setWarehouse} = useWarehouse();
    const [warehouseInputValue, setWarehouseInputValue] = useState<string>("");
    const [isWarehouseRequestSending, setIsWarehouseRequestSending] = useState(true);

    if (!selectedCity || !commonCities) return;
    return (
        <DeliveryBlockLayout>
            <h2 className="text-lg font-semibold ">Отримувач</h2>
            <MessageFormInput id={'name'} label={'І\'мя'} required/>
            <MessageFormInput id={'surname'} label={'Прізвище'} required/>
            <MessageFormInput id={'phoneNumber'} type={"number"} label={'Телефон'} required/>
            <MessageFormInput id={'email'} label={'Адреса електронної пошти (необов\'язково)'} required={false}/>
            <MessageFormInput id={'message'} label={'Примітки до замовлень (необов\'язково)'} textArea/>
            <h2 className="text-lg font-semibold mt-3 ">Доставка</h2>
            <CitySelectorContainer selectedCity={selectedCity}/>
            <CitySelector
                commonCities={commonCities}
                setWarehouseInputValue={setWarehouseInputValue}
                setWarehouse={setWarehouse}
                selectedCity={selectedCity}
                setSelectedCity={setSelectedCity}
            />
            <WareHouseSelector
                setIsWarehouseRequestSending={setIsWarehouseRequestSending}
                isWarehouseRequestSending={isWarehouseRequestSending}
                setWarehouseInputValue={setWarehouseInputValue}
                warehouseInputValue={warehouseInputValue}
                warehouse={warehouse}
                setWarehouse={setWarehouse}
                cityRef={selectedCity.ref}
            />
        </DeliveryBlockLayout>
    )
}

export default DeliveryBlock;