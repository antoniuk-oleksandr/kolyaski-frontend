import TopFooterColumnHeaderLayout from "./TopFooterColumnHeaderLayout";
import {FaBox} from "react-icons/fa6";

const TopFooterFirstColumnHeader = () => {
    return (
        <TopFooterColumnHeaderLayout>
            <FaBox className="text-3xl text-primary" />
            <span>Доставка</span>
        </TopFooterColumnHeaderLayout>
    )
}

export default TopFooterFirstColumnHeader;