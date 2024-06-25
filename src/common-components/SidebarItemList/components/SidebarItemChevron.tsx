import {SidebarItemType} from "@/types/SidebarItemType";
import { IoChevronDownOutline, IoChevronForwardOutline } from "react-icons/io5";
import {handleSidebarItemChevronClick} from "@/common-components/SidebarItemList/handlers";

type SidebarItemChevronProps = {
    chevronDirection: 'right' | 'down',
    item: SidebarItemType,
}

const SidebarItemChevron = (props: SidebarItemChevronProps) => {
    const {chevronDirection, item} = props
    const styles = 'text-lg';

    if (item.subItems === undefined) return null;
    return (
        <>
            {
                chevronDirection === 'right'
                    ? <IoChevronForwardOutline onClick={(e) => handleSidebarItemChevronClick(e)} className={styles}/>
                    : <IoChevronDownOutline onClick={(e) => handleSidebarItemChevronClick(e)} className={styles}/>
            }
        </>
    )
}

export default SidebarItemChevron;