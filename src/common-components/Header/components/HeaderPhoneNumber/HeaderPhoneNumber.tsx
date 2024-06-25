import HeaderPhoneNumberLayout from "./HeaderPhoneNumberLayout";
import {FaPhoneAlt} from "react-icons/fa";

const HeaderPhoneNumber = () => {
    const phoneNumber = '+38 (093) 788-12-71';

    return (
        <HeaderPhoneNumberLayout>
            <FaPhoneAlt className={"text-base"}/>
            <p>{phoneNumber}</p>
        </HeaderPhoneNumberLayout>
    )
}

export default HeaderPhoneNumber;