import ContactsRightSideLayout from "./ContactsRightSideLayout";
import PageTitle from "@/common-components/PageTitle";
import MessageForm from "@/pages/contacts/components/MessageForm/MessageForm";

const ContactsRightSide = () => {
    return (
        <ContactsRightSideLayout>
            <PageTitle text={'Зв\'яжіться з нами'}/>
            <p>Ми з радістю відповімо на будь-які запитання щодо товарів нашого сайту. Просто надішліть нам повідомлення у формі нижче з будь-якими запитаннями, які у вас можуть виникнути.</p>
            <MessageForm/>
        </ContactsRightSideLayout>
    )
}

export default ContactsRightSide;