import MiddleFooterThirdColumnHeaderLayout
    from "@/common-components/Footer/components/MiddleFooter/MiddleFooterThirdColumnHeader/MiddleFooterThirdColumnHeaderLayout";
import SidebarItemList from "@/common-components/SidebarItemList/SidebarItemList";

const MiddleFooterSecondColumn = () => {
    return (
        <>
            <MiddleFooterThirdColumnHeaderLayout>
                <p>Корисні посилання</p>
            </MiddleFooterThirdColumnHeaderLayout>
            <SidebarItemList
                subMenuStyles={'!text-primary w-full px-2 pt-2 drop-shadow-lg'}
                itemStyles={'text-secondary hover:text-white'}
            />
        </>
    )
}

export default MiddleFooterSecondColumn;