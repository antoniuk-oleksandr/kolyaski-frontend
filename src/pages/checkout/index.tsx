import PageContentLayout from "@/common-components/PageContentLayout";
import CheckoutLeftSide from "@/pages/checkout/components/CheckoutLeftSide/CheckoutLeftSide";
import CheckoutRightSide from "@/pages/checkout/components/CheckoutRightSide/CheckoutRightSide";
import {useSelector} from "react-redux";
import {CartState} from "@/types/CartState";
import CheckoutFormLayout from "@/pages/checkout/components/CheckoutForm/CheckoutFormLayout";
import NoCartItemsMessage from "@/pages/cart/components/NoCartItemsMessage";
import {useCommonCities} from "@/pages/checkout/use-effects/use-common-cities";
import {useState} from "react";
import SuccessfulOrder from "@/pages/checkout/components/SuccessfulOrder/SuccessfulOrder";
import LoaderElement from "@/common-components/LoaderElement";

const CheckoutPage = () => {
    const {cart} = useSelector((state: any) => state) as { cart: CartState };
    const {commonCities} = useCommonCities();
    const [isOrderCompleted, setIsOrderCompleted] = useState<boolean>(false);
    const [isOrderRequestSending, setIsOrderRequestSending] = useState<boolean>(false);

    if (cart.products.length === 0 && !isOrderCompleted) return <NoCartItemsMessage/>
    if(!commonCities) return <LoaderElement/>
    if(isOrderCompleted) return <SuccessfulOrder/>
    return (
        <CheckoutFormLayout
            setIsOrderRequestSending={setIsOrderRequestSending}
            setIsOrderCompleted={setIsOrderCompleted}
            products={cart.products}
        >
            <PageContentLayout>
                <CheckoutLeftSide commonCities={commonCities} cart={cart}/>
                <CheckoutRightSide isOrderRequestSending={isOrderRequestSending} cart={cart}/>
            </PageContentLayout>
        </CheckoutFormLayout>
    )
}

export default CheckoutPage;