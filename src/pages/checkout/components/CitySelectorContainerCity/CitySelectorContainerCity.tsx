import CitySelectorContainerCityLayout from "./CitySelectorContainerCityLayout";
import {City} from "@/types/City";

type CitySelectorContainerCityProps = {
    selectedCity: City,
}

const CitySelectorContainerCity = (props: CitySelectorContainerCityProps) => {
    const {selectedCity} = props;
    const {cityName, regionName} = selectedCity;

    return (
        <CitySelectorContainerCityLayout>
            <p className={"text-base leading-4"}>{cityName}</p>
            <p className={"text-sm leading-3.5"}>{regionName}</p>
        </CitySelectorContainerCityLayout>
    )
}

export default CitySelectorContainerCity;