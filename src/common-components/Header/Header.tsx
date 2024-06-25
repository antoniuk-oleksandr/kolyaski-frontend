import HeaderLayout from "./HeaderLayout";
import TopHeaderLine from "@/common-components/Header/components/TopHeaderLine/TopHeaderLine";
import BottomHeaderLine from "@/common-components/Header/components/BottomHeaderLine/BottomHeaderLine";

const Header = () => {
    return (
        <HeaderLayout>
            <TopHeaderLine/>
            <BottomHeaderLine/>
        </HeaderLayout>
    )
}

export default Header;