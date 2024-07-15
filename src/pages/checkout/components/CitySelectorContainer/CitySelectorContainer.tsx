import CitySelectorContainerLayout from "./CitySelectorContainerLayout";
import {FaMapMarkerAlt} from "react-icons/fa";
import CitySelectorContainerCity from "@/pages/checkout/components/CitySelectorContainerCity/CitySelectorContainerCity";
import {City} from "@/types/City";

type CitySelectorContainerProps = {
    selectedCity: City,
}

const CitySelectorContainer = (props: CitySelectorContainerProps) => {
    return (
        <CitySelectorContainerLayout>
            <FaMapMarkerAlt className={"text-xl"}/>
            <CitySelectorContainerCity {...props}/>
            <p className={"text-primary hover:text-neutral-600 duration-200 ease-out cursor-pointer"}>Змінити</p>
        </CitySelectorContainerLayout>
    )
}

export default CitySelectorContainer;