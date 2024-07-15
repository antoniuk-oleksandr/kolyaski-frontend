import CitySelectorMessageLayout from "./CitySelectorMessageLayout";
import {FaTruck} from "react-icons/fa6";

const CitySelectorMessage = () => {
    return (
        <CitySelectorMessageLayout>
            <FaTruck className="text-xl"/>
            <span>Доставляємо замовлення по всій Україні!</span>
        </CitySelectorMessageLayout>
    )
}

export default CitySelectorMessage;