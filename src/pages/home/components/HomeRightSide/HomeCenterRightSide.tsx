import HomeCenterRightSideLayout from "./HomeCenterRightSideLayout";
import SideCard from "@/common-components/SideCard/SideCard";
import {HomeData} from "@/types/HomeData";
import HomeRightSideLists from "@/pages/home/components/HomeRightSideLists/HomeRightSideLists";

type HomeCenterRightSideProps = {
    homeData: HomeData,
}

const HomeCenterRightSide = (props: HomeCenterRightSideProps) => {
    return (
        <HomeCenterRightSideLayout>
            <SideCard
                bgColor={"bg-primary"}
                firstLineText={"Заколисуючі центри"}
                firstLineTextStyle={"text-[22px] phone:text-4xl uppercase font-semibold"}
                secondLineText={"в асортиметі"}
                secondLineTextStyle={"text-lg font-semibold uppercase phone:text-3xl"}
                thirdLineText={"Комфортне місце для Вашого малюка"}
                thirdLineTextStyle={"text-sm phone:text-xl"}
                imageSrc={"/images/home-center-right.jpg"}
                buyButtonStyles={"bg-secondary hover:bg-white hover:text-neutral-600"}
                link={"/product?type=стільчики+для+годування&sortType=за+полулярністю"}
            />
            <HomeRightSideLists {...props}/>
        </HomeCenterRightSideLayout>
    )
}

export default HomeCenterRightSide;