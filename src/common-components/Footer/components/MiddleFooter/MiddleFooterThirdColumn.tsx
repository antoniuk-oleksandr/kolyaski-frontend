import MiddleFooterThirdColumnHeaderLayout
    from "@/common-components/Footer/components/MiddleFooter/MiddleFooterThirdColumnHeader/MiddleFooterThirdColumnHeaderLayout";
import {FaCaretRight, FaChevronRight, FaClock, FaPhone} from "react-icons/fa6";
import MiddleFooterTextLayout from "@/common-components/Footer/components/MiddleFooter/MiddleFooterTextLayout";
import {BsFillCaretRightFill} from "react-icons/bs";

const TopFooterThirdColumn = () => {

    return (
        <>
            <MiddleFooterThirdColumnHeaderLayout>
                <p>Контакти</p>
            </MiddleFooterThirdColumnHeaderLayout>
            <MiddleFooterTextLayout>
                <FaPhone className="text-lg"/>
                <p>+38 (093) 788 12 71</p>
            </MiddleFooterTextLayout>
            <MiddleFooterTextLayout>
                <div className="size-4 relative grid place-items-center">
                    <BsFillCaretRightFill className="text-2xl absolute"/>
                </div>
                <p>Місто Черкаси вулиця В’ячеслава Чорновола 49</p>
            </MiddleFooterTextLayout>
            <MiddleFooterTextLayout>
                <FaClock className="text-lg mb-5"/>
                <div className="flex flex-col">
                    <p>Понеділок -П'ятниця: 10:00 -19:00</p>
                    <p>Субота - Неділя: 10:00 - 17:00</p>
                </div>
            </MiddleFooterTextLayout>
        </>
    )
}

export default TopFooterThirdColumn;