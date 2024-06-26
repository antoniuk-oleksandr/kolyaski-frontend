import DeliveryAndReturnRightSideLayout from "./DeliveryAndReturnRightSideLayout";
import PageTitle from "@/common-components/PageTitle";
import PageBodyText from "@/common-components/PageBodyText";

const DeliveryAndReturnRightSide = () => {
    return (
        <DeliveryAndReturnRightSideLayout>
            <PageTitle text={'Доставка і повернення'}/>
            <PageBodyText
                firstLineText={'Доставка'}
                secondLineText={'Здійснюється в межах України поштовим оператором Нова Пошта. ' +
                    'Інші способи доставки обговорюються індивідуально ' +
                    '(вартість згідно тарифів поштових операторів).'}
            />
            <PageBodyText
                firstLineText={'Термін Доставки'}
                secondLineText={'Залежить від віддаленості Вашого населеного пункту (зазвичай 1-3 дні).'}
            />
        </DeliveryAndReturnRightSideLayout>
    )
}

export default DeliveryAndReturnRightSide;