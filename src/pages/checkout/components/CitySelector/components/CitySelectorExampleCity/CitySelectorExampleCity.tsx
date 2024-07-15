import CitySelectorExampleCityLayout from "./CitySelectorExampleCityLayout";
import {Dispatch, SetStateAction} from "react";
import {City} from "@/types/City";
import {handleExampleCityClick} from "@/pages/checkout/handlers";

type CitySelectorExampleCityProps = {
    setCityInput: Dispatch<SetStateAction<City>>,
    setInputValue: Dispatch<SetStateAction<string>>,
    commonCities: City[],
}

const CitySelectorExampleCity = (props: CitySelectorExampleCityProps) => {
    const {setCityInput, setInputValue, commonCities} = props;
    const exampleCity = commonCities[commonCities.length - 1];

    return (
        <CitySelectorExampleCityLayout>
            <span className={"text-sm"}>Наприклад,</span>
            <span
                onClick={() => handleExampleCityClick(exampleCity, setCityInput, setInputValue)}
                className={"text-primary hover:underline cursor-pointer duration-200 ease-out"}
            >{exampleCity.cityName}</span>
        </CitySelectorExampleCityLayout>
    )
}

export default CitySelectorExampleCity;