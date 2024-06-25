import {FaCreditCard} from "react-icons/fa6";
import TopFooterColumnHeaderLayout
    from "@/common-components/Footer/components/TopFooter/TopFooterFirstColumnHeader/TopFooterColumnHeaderLayout";

const TopFooterSecondColumnHeader = () => {
    return (
        <TopFooterColumnHeaderLayout>
            <FaCreditCard className={"text-3xl text-primary"}/>
            <span>Оплата</span>
        </TopFooterColumnHeaderLayout>
    )
}

export default TopFooterSecondColumnHeader;