import LeftProductItemSideLayout from "./LeftProductItemSideLayout";
import Sidebar from "@/common-components/Sidebar/Sidebar";
import SideCard from "@/common-components/SideCard/SideCard";

const LeftProductItemSide = () => {
    return (
        <LeftProductItemSideLayout>
            <Sidebar/>
            <SideCard
                firstLineText={'Найкращі ціни'}
                secondLineText={'великий асортимент'}
                thirdLineText={'Перевірені виробники'}
                imageSrc={'/images/home-carousel3.jpg'}
                bgColor={'bg-primary'}
                link={'/product?type=ліжечка&sortType=за+полулярністю'}
                firstLineTextStyle={"text-[22px] phone:text-4xl uppercase font-semibold"}
                secondLineTextStyle={"text-lg font-semibold uppercase phone:text-3xl"}
                thirdLineTextStyle={"text-sm phone:text-xl"}
                buyButtonStyles={"bg-secondary hover:bg-white hover:text-neutral-600"}
            />
        </LeftProductItemSideLayout>
    )
}

export default LeftProductItemSide;