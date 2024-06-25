import FooterSocialMediaButtonsLayout from "./FooterSocialMediaButtonsLayout";
import {FaFacebook, FaInstagram} from "react-icons/fa6";

const FooterSocialMediaButtons = () => {
    const facebookUrl = 'https://www.facebook.com/kolyaski.in.ua/';
    const instagramUrl = 'https://www.instagram.com/kolyaski.in.ua/';
    const buttonStyle = 'cursor-pointer duration-200 ease-out hover:text-white active:scale-95';

    return (
        <FooterSocialMediaButtonsLayout>
            <FaFacebook
                className={buttonStyle}
                onClick={() => window.open(facebookUrl)}
            />
            <FaInstagram
                className={buttonStyle}
                onClick={() => window.open(instagramUrl)}
            />
        </FooterSocialMediaButtonsLayout>
    )
}

export default FooterSocialMediaButtons;