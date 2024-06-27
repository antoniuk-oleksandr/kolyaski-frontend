import PageContentLayout from "@/common-components/PageContentLayout";
import WishlistLeftSide from "@/pages/wishlist/components/WishlistLeftSide/WishlistLeftSide";
import WishlistRightSide from "@/pages/wishlist/components/WishlistRightSide/WishlistRightSide";

const WishlistPage = () => {
    return (
        <>
            <h2 className={"w-full text-primary text-center font-semibold text-4xl pb-5 pt-7"}>Пакунок Малюка</h2>
            <PageContentLayout>
                <WishlistLeftSide/>
                <WishlistRightSide/>
            </PageContentLayout>
        </>
    )
}

export default WishlistPage;