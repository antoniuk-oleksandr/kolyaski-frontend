import {Dispatch, SetStateAction, useRef} from "react";
import {handleCitySelect, handleCitySelectorInput, handleSelectInputBlur} from "@/pages/checkout/handlers";
import {City} from "@/types/City";
import {CancelTokenSource} from "axios";

type CitySelectorInputElementProps = {
    setInputValue: Dispatch<SetStateAction<string>>,
    inputValue: string,
    setResponseCities : Dispatch<SetStateAction<City[] | undefined>>,
    setIsDropdownOpen: Dispatch<SetStateAction<boolean>>,
    cityInput: City,
    containError: boolean,
}

const CitySelectorInputElement = (props: CitySelectorInputElementProps) => {
    const {inputValue, setInputValue, setResponseCities, setIsDropdownOpen, cityInput, containError} = props;
    const cancelToken = useRef<CancelTokenSource | null>(null);

    return (
        <input
            placeholder={"Виберіть своє місто"}
            value={inputValue}
            onFocus={() => setIsDropdownOpen(true)}
            onBlur={() => handleSelectInputBlur(setIsDropdownOpen, setInputValue, cityInput)}
            onChange={(e) =>
                    handleCitySelectorInput(e, cancelToken, setResponseCities, setInputValue,setIsDropdownOpen)}
            className={`w-full ring-1 ring-neutral-200 duration-200 ease-out rounded-md text-sm outline-none px-3 py-2 
            ${containError ? 'hover:ring-red-500 focus:ring-red-500' : 'hover:ring-primary focus:ring-primary'}`}
            type="text"
        />
    )
}

export default CitySelectorInputElement;