import {City} from "@/types/City";
import {Dispatch, SetStateAction} from "react";
import {handleExampleCityClick} from "@/pages/checkout/handlers";

type CommonCityTextProps = {
    city: City,
    setCityInput: Dispatch<SetStateAction<City>>,
    setInputValue: Dispatch<SetStateAction<string>>,
}

const CommonCityText = (props: CommonCityTextProps) => {
    const {city, setCityInput, setInputValue} = props;

    return (
        <div className={"px-3 text-lg leading-10"}>
            <span
                onClick={() => handleExampleCityClick(city, setCityInput, setInputValue)}
                className={"text-primary cursor-pointer w-fit hover:text-neutral-600 duration-200 ease-out"}
            >{city.cityName}</span>
        </div>
    )
}

export default CommonCityText;