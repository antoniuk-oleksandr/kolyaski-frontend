import TopFooterColumnHeaderLayout
    from "@/common-components/Footer/components/TopFooter/TopFooterFirstColumnHeader/TopFooterColumnHeaderLayout";
import {IoMdRedo} from "react-icons/io";

const TopFooterThirdColumnHeader = () => {
    return (
        <TopFooterColumnHeaderLayout>
            <IoMdRedo className={"text-3xl text-primary transform scale-x-[-1]"}/>
            <span>Повернення товару</span>
        </TopFooterColumnHeaderLayout>
    )
}

export default TopFooterThirdColumnHeader;