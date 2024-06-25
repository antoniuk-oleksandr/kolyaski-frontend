import TopFooterFirstColumnHeaderLayout from "./TopFooterFirstColumnHeaderLayout";
import {FaBox, FaBoxArchive} from "react-icons/fa6";

const TopFooterFirstColumnHeader = () => {
    return (
        <TopFooterFirstColumnHeaderLayout>
            <FaBox className="text-3xl text-primary" />
            <span>Доставка</span>
        </TopFooterFirstColumnHeaderLayout>
    )
}

export default TopFooterFirstColumnHeader;