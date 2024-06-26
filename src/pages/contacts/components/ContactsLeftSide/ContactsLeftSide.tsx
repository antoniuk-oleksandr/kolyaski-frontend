import ContactsLeftSideLayout from "./ContactsLeftSideLayout";
import Sidebar from "@/common-components/Sidebar/Sidebar";
import MiddleFooterThirdColumnHeaderLayout
    from "@/common-components/Footer/components/MiddleFooter/MiddleFooterThirdColumnHeader/MiddleFooterThirdColumnHeaderLayout";
import MiddleFooterTextLayout from "@/common-components/Footer/components/MiddleFooter/MiddleFooterTextLayout";
import {FaClock, FaPhone} from "react-icons/fa6";
import {BsFillCaretRightFill} from "react-icons/bs";

const ContactsLeftSide = () => {
    return (
        <ContactsLeftSideLayout>
            <Sidebar/>
            <div className={"p-3  phone:hidden flex flex-col gap-y-3"}>
                <MiddleFooterThirdColumnHeaderLayout>
                    <p className={"text-neutral-600 font-semibold"}>Контакти</p>
                </MiddleFooterThirdColumnHeaderLayout>
                <MiddleFooterTextLayout>
                    <FaPhone className="text-lg text-primary"/>
                    <p className={"text-neutral-600 text-sm"}>+38 (093) 788 12 71</p>
                </MiddleFooterTextLayout>
                <MiddleFooterTextLayout>
                    <FaClock className="text-lg mb-5 text-primary"/>
                    <div className="flex flex-col text-neutral-600 text-sm">
                        <p>Понеділок -П'ятниця: 10:00 -19:00</p>
                        <p>Субота - Неділя: 10:00 - 17:00</p>
                    </div>
                </MiddleFooterTextLayout>
            </div>
        </ContactsLeftSideLayout>
    )
}

export default ContactsLeftSide;