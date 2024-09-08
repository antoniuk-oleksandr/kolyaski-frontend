import WishlistRightSideLayout from "./WishlistRightSideLayout";
import SideCard from "@/common-components/SideCard/SideCard";

const WishlistRightSide = () => {
    return (
        <WishlistRightSideLayout>
            <SideCard
                firstLineText={'Товари для дітей'}
                secondLineText={'В асортиметі'}
                thirdLineText={'З перших днів життя'}
                imageSrc={'/images/wishlist-side-card.jpg'}
                bgColor={'bg-primary'}
                link={'/catalog'}
                firstLineTextStyle={"text-[22px] phone:text-4xl uppercase font-semibold"}
                secondLineTextStyle={"text-lg font-semibold uppercase phone:text-3xl"}
                thirdLineTextStyle={"text-sm phone:text-xl"}
                buyButtonStyles={"bg-secondary hover:bg-white hover:text-neutral-600"}
            />
        </WishlistRightSideLayout>
    )
}

export default WishlistRightSide;