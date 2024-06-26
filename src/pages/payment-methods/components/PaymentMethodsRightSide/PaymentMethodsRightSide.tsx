import PaymentMethodsRightSideLayout from "./PaymentMethodsRightSideLayout";
import PageTitle from "@/common-components/PageTitle";
import PageBodyText from "@/common-components/PageBodyText";

const PaymentMethodsRightSide= () => {
    return (
        <PaymentMethodsRightSideLayout>
            <PageTitle text={'Способи Оплати'}/>
            <PageBodyText
                firstLineText={'Готівковий розрахунок'}
                secondLineText={'Готівкою при самовивозі з магазину. Наложений платіж з попередньою передплатою.'}
            />
            <PageBodyText
                firstLineText={'Безготівковий розрахунок'}
                secondLineText={'Visa, MasterCard, Liqpay.'}
            />
        </PaymentMethodsRightSideLayout>
    )
}

export default PaymentMethodsRightSide;