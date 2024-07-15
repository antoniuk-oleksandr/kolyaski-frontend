import CitySelectorCitiesListLayout from "./CitySelectorCitiesListLayout";
import {City} from "@/types/City";
import {Dispatch, Key, SetStateAction} from "react";
import {handleCitySelect} from "@/pages/checkout/handlers";

type CitySelectorCitiesListProps = {
    responseCities: City[] | undefined,
    setCityInput: Dispatch<SetStateAction<City>>,
    setInputValue: Dispatch<SetStateAction<string>>,
    isDropdownOpen: boolean,
    setIsDropdownOpen: Dispatch<SetStateAction<boolean>>,
}

const CitySelectorCitiesList = (props: CitySelectorCitiesListProps) => {
    const {responseCities, setCityInput, setInputValue, setIsDropdownOpen} = props;

    return (
        <CitySelectorCitiesListLayout {...props}>
            {responseCities && responseCities.map((element, index: Key) => (
                <button
                    type={"button"}
                    tabIndex={-1}
                    onPointerDown={(e) => e.preventDefault()}
                    onClick={() =>
                        handleCitySelect(element.description, responseCities, setCityInput, setInputValue, setIsDropdownOpen)}
                    className={"p-3 text-sm hover:bg-neutral-100 w-full outline-none text-start cursor-pointer"}
                    key={index}
                >{element.description}</button>
            ))}
        </CitySelectorCitiesListLayout>
    )
}

export default CitySelectorCitiesList;