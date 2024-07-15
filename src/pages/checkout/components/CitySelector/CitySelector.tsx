import CitySelectorLayout from "./CitySelectorLayout";
import CitySelectorMessage
    from "@/pages/checkout/components/CitySelector/components/CitySelectorMessage/CitySelectorMessage";
import CommonCitiesGrid from "@/pages/checkout/components/CitySelector/components/CommonCitiesGrid/CommonCitiesGrid";
import CitySelectorInput from "@/pages/checkout/components/CitySelector/components/CitySelectorInput/CitySelectorInput";
import {Dispatch, SetStateAction, useState} from "react";
import { City } from "@/types/City";
import CitySelectorSubmitButton from "@/pages/checkout/components/CitySelector/CitySelectorSubmitButton";
import BottomCitySelectorText from "@/pages/checkout/components/CitySelector/components/BottomCitySelectorText";
import {Warehouse} from "@/types/Warehouse";

type CitySelectorInputProps = {
    selectedCity: City,
    setSelectedCity: Dispatch<SetStateAction<City | null>>,
    setWarehouse: Dispatch<SetStateAction<Warehouse | undefined>>,
    setWarehouseInputValue: Dispatch<SetStateAction<string>>,
    commonCities: City[],
}

const CitySelector = (props: CitySelectorInputProps) => {
    const {selectedCity} = props;
    const [cityInput, setCityInput] = useState<City>(selectedCity);
    const [inputValue, setInputValue] = useState(selectedCity.description);

    return (
        <CitySelectorLayout>
            <CitySelectorMessage/>
            <CommonCitiesGrid
                {...props}
                setInputValue={setInputValue}
                setCityInput={setCityInput}
            />
            <CitySelectorInput
                {...props}
                inputValue={inputValue}
                setInputValue={setInputValue}
                setCityInput={setCityInput}
                cityInput={cityInput}
            />
            <CitySelectorSubmitButton {...props} cityInput={cityInput}/>
            <BottomCitySelectorText/>
        </CitySelectorLayout>
    )
}

export default CitySelector;