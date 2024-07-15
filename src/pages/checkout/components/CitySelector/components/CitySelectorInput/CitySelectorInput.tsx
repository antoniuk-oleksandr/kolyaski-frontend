import CitySelectorInputLayout from "./CitySelectorInputLayout";
import {Dispatch, SetStateAction, useState} from "react";
import {City} from "@/types/City";
import CitySelectorExampleCity
    from "@/pages/checkout/components/CitySelector/components/CitySelectorExampleCity/CitySelectorExampleCity";
import CitySelectorInputElement from "@/pages/checkout/components/CitySelector/components/CitySelectorInputElement";
import CitySelectorCitiesList
    from "@/pages/checkout/components/CitySelector/components/CitySelectorCitiesList/CitySelectorCitiesList";
import NoCityMessage from "@/pages/checkout/components/CitySelector/components/NoCityMessage";
import {checkIfSelectorCityContainError} from "@/pages/checkout/helpers";
import citySelector from "@/pages/checkout/components/CitySelector/CitySelector";

type CitySelectorInputProps = {
    cityInput: City,
    setCityInput: Dispatch<SetStateAction<City>>,
    setInputValue: Dispatch<SetStateAction<string>>,
    inputValue: string,
    commonCities: City[],
}


const CitySelectorInput = (props: CitySelectorInputProps) => {
    const {cityInput, inputValue} = props;
    const [responseCities, setResponseCities] = useState<City[] | undefined>();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const containError = checkIfSelectorCityContainError(responseCities, inputValue, cityInput);

    return (
        <CitySelectorInputLayout>
            <span className={"text-xs"}>Вкажіть населений пункт України</span>
            <CitySelectorInputElement
                {...props}
                containError={containError}
                setIsDropdownOpen={setIsDropdownOpen}
                setResponseCities={setResponseCities}
            />
            <NoCityMessage containError={containError}/>
            <CitySelectorCitiesList
                {...props}
                setIsDropdownOpen={setIsDropdownOpen}
                isDropdownOpen={isDropdownOpen}
                responseCities={responseCities}
            />
            <CitySelectorExampleCity {...props}/>
        </CitySelectorInputLayout>
    )
}

export default CitySelectorInput;