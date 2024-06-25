import SecondBottomHeaderColumnLayout from "./SecondBottomHeaderColumnLayout";
import HeaderNavbar from "@/common-components/Header/components/HeaderNavbar/HeaderNavbar";
import HeaderSearchInput from "@/common-components/Header/components/HeaderSearchInput/HeaderSearchInput";

const SecondBottomHeaderColumn = () => {
    return (
        <SecondBottomHeaderColumnLayout>
            <HeaderNavbar/>
            <HeaderSearchInput/>
        </SecondBottomHeaderColumnLayout>
    )
}

export default SecondBottomHeaderColumn;