import CheckoutLeftSideLayout from "./CheckoutLeftSideLayout";
import PageTitle from "@/common-components/PageTitle";
import DeliveryBlock from "@/pages/checkout/components/DeliveryBlock/DeliveryBlock";
import CheckoutCart from "@/pages/checkout/components/CheckoutCart/CheckoutCart";
import {CartState} from "@/types/CartState";
import {City} from "@/types/City";

type CheckoutLeftSideProps = {
    cart: CartState,
    commonCities: City[],
}

const CheckoutLeftSide = (props: CheckoutLeftSideProps) => {
    return (
        <CheckoutLeftSideLayout>
            <PageTitle text={'Оформлення замовлення'}/>
            <CheckoutCart {...props}/>
            <DeliveryBlock {...props}/>
        </CheckoutLeftSideLayout>
    )
}

export default CheckoutLeftSide;