import DeliveryAndReturnLeftSideLayout from "./DeliveryAndReturnLeftSideLayout";
import Sidebar from "@/common-components/Sidebar/Sidebar";
import SideCard from "@/common-components/SideCard/SideCard";

const DeliveryAndReturnLeftSide = () => {
    return (
        <DeliveryAndReturnLeftSideLayout>
            <Sidebar/>
            <SideCard
                bgColor={"bg-secondary"}
                firstLineText={"сучасні коляски"}
                firstLineTextStyle={"text-[22px] phone:text-4xl uppercase font-semibold"}
                secondLineText={"популярні моделі"}
                secondLineTextStyle={"text-lg font-semibold uppercase phone:text-3xl"}
                thirdLineText={"Комфорт та безпека Вашої дитини"}
                thirdLineTextStyle={"text-sm phone:text-xl"}
                imageSrc={"/images/home-carousel1.jpg"}
                buyButtonStyles={"bg-primary hover:bg-white hover:text-neutral-600"}
                link={"/"}
            />
        </DeliveryAndReturnLeftSideLayout>
    )
}

export default DeliveryAndReturnLeftSide;