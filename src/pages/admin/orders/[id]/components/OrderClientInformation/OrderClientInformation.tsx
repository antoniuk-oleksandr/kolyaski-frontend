import OrderClientInformationLayout from "./OrderClientInformationLayout";
import MessageFormInput from "@/pages/contacts/components/MessageFormInput/MessageFormInput";

const OrderClientInformation = () => {
    return (
        <OrderClientInformationLayout>
            <h2 className="text-lg font-semibold">Інформація про клієнта</h2>
            <MessageFormInput id="firstName" label="Ім'я" required/>
            <MessageFormInput id="surname" label="Прізвище" required/>
            <MessageFormInput id="phoneNumber" label="Номер телефону" required/>
            <MessageFormInput id="email" label="Електронна пошта"/>
            <MessageFormInput id="message" textArea label="Повідомлення"/>
        </OrderClientInformationLayout>
    )
}

export default OrderClientInformation;