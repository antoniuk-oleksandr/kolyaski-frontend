import FooterLayout from "./FooterLayout";
import TopFooter from "@/common-components/Footer/components/TopFooter/TopFooter";
import MiddleFooter from "@/common-components/Footer/components/MiddleFooter/MiddleFooter";
import BottomFooter from "@/common-components/Footer/components/BottomFooter/BottomFooter";

const Footer = () => {
    return (
        <FooterLayout>
            <TopFooter/>
            <MiddleFooter/>
            <BottomFooter/>
        </FooterLayout>
    )
}

export default Footer;