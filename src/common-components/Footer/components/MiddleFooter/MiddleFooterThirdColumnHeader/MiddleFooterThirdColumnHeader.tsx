import MiddleFooterThirdColumnHeaderLayout from "./MiddleFooterThirdColumnHeaderLayout";
import {FaBox} from "react-icons/fa6";

const MiddleFooterThirdColumnHeader = () => {
    return (
        <MiddleFooterThirdColumnHeaderLayout>
            <FaBox className="text-3xl text-primary" />
            <span>Доставка</span>
        </MiddleFooterThirdColumnHeaderLayout>
    )
}

export default MiddleFooterThirdColumnHeader;