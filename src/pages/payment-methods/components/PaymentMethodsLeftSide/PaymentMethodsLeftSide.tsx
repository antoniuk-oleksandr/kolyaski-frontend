import PaymentMethodsLeftSideLayout from "./PaymentMethodsLeftSideLayout";
import Sidebar from "@/common-components/Sidebar/Sidebar";
import SideCard from "@/common-components/SideCard/SideCard";

const PaymentMethodsLeftSide = () => {
    return (
        <PaymentMethodsLeftSideLayout>
            <Sidebar/>
            <SideCard
                bgColor={"bg-primary"}
                firstLineText={"Стільчики для годування"}
                firstLineTextStyle={"text-[22px] phone:text-4xl uppercase font-semibold"}
                secondLineText={"комфорт та безпека"}
                secondLineTextStyle={"text-lg font-semibold uppercase phone:text-3xl"}
                thirdLineText={"Товари кращих виробників"}
                thirdLineTextStyle={"text-sm phone:text-xl"}
                imageSrc={"/images/payment-methods1.jpg"}
                buyButtonStyles={"bg-secondary hover:bg-white hover:text-neutral-600"}
                link={"/product?type=стільчики+для+годування&sortType=за+полулярністю"}
            />
        </PaymentMethodsLeftSideLayout>
    )
}

export default PaymentMethodsLeftSide;