import CommonCitiesGridLayout from "./CommonCitiesGridLayout";
import {Dispatch, Key, SetStateAction} from "react";
import CommonCityText from "@/pages/checkout/components/CitySelector/components/CommonCitiesGrid/CommonCityText";
import {City} from "@/types/City";

type CommonCitiesGridProps = {
    setCityInput: Dispatch<SetStateAction<City>>,
    setInputValue: Dispatch<SetStateAction<string>>,
    commonCities: City[],
}

const CommonCitiesGrid = (props: CommonCitiesGridProps) => {
    const {commonCities} = props;

    return (
        <CommonCitiesGridLayout>
            {commonCities.slice(0, 6).map((city, index: Key) => (
                <CommonCityText city={city} {...props} key={index}/>
            ))}
        </CommonCitiesGridLayout>
    )
}

export default CommonCitiesGrid;