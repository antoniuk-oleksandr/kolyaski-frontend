import HomeContentLayout from "@/pages/home/components/HomeContentLayout";
import PaymentMethodsLeftSide from "@/pages/payment-methods/components/PaymentMethodsLeftSide/PaymentMethodsLeftSide";
import PaymentMethodsRightSide
    from "@/pages/payment-methods/components/PaymentMethodsRightSide/PaymentMethodsRightSide";

const PaymentMethodsPage = () => {
    return (
        <HomeContentLayout>
            <PaymentMethodsLeftSide/>
            <PaymentMethodsRightSide/>
        </HomeContentLayout>
    )
}

export default PaymentMethodsPage;