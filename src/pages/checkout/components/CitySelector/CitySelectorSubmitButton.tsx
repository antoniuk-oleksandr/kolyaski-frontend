import Button from "@/common-components/Button";
import {City} from "@/types/City";
import {Dispatch, SetStateAction} from "react";
import {handleSelectCityButtonClick} from "@/pages/checkout/handlers";
import {Warehouse} from "@/types/Warehouse";

type CitySelectorSubmitButtonProps = {
    cityInput: City,
    setSelectedCity: Dispatch<SetStateAction<City | null>>,
    setWarehouse: Dispatch<SetStateAction<Warehouse | undefined>>,
    setWarehouseInputValue: Dispatch<SetStateAction<string>>,
}

const CitySelectorSubmitButton = (props: CitySelectorSubmitButtonProps) => {
    const {cityInput, setSelectedCity, setWarehouseInputValue, setWarehouse} = props;

    return (
        <div className={"w-full flex justify-end mt-4"}>
            <Button
                onClick={() =>
                    handleSelectCityButtonClick(cityInput, setSelectedCity, setWarehouse, setWarehouseInputValue)}
            >Застосувати</Button>
        </div>
    )
}

export default CitySelectorSubmitButton;