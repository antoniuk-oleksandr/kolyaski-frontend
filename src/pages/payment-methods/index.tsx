import PageContentLayout from "@/common-components/PageContentLayout";
import PaymentMethodsLeftSide from "@/pages/payment-methods/components/PaymentMethodsLeftSide/PaymentMethodsLeftSide";
import PaymentMethodsRightSide
    from "@/pages/payment-methods/components/PaymentMethodsRightSide/PaymentMethodsRightSide";

const PaymentMethodsPage = () => {
    return (
        <>
            <PageContentLayout>
                <PaymentMethodsLeftSide/>
                <PaymentMethodsRightSide/>
            </PageContentLayout>
        </>
    )
}

export default PaymentMethodsPage;