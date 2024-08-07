import {NextPage} from "next";
import CartLeftSide from "@/pages/cart/components/CartLeftSide/CartLeftSide";
import CartRightSide from "@/pages/cart/components/CartRightSide/CartRightSide";
import PageContentLayout from "@/common-components/PageContentLayout";
import {useSelector} from "react-redux";
import NoCartItemsMessage from "@/pages/cart/components/NoCartItemsMessage";
import {ReduxState} from "@/types/ReduxState";

const CartPage: NextPage = () => {
    const {products} = useSelector((state: ReduxState) => state.cart);

    if (products.length === 0) return <NoCartItemsMessage/>
    return (
        <PageContentLayout>
            <CartLeftSide products={products}/>
            <CartRightSide products={products}/>
        </PageContentLayout>
    )
}

export default CartPage;