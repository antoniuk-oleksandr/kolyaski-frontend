import PageContentLayout from "@/common-components/PageContentLayout";
import ContactsLeftSide from "@/pages/contacts/components/ContactsLeftSide/ContactsLeftSide";
import ContactsRightSide from "@/pages/contacts/components/ContactsRightSide/ContactsRightSide";

const ContactsPage = () => {
    return (
        <>
            <PageContentLayout>
                <ContactsLeftSide/>
                <ContactsRightSide/>
            </PageContentLayout>
        </>
    )
}

export default ContactsPage;