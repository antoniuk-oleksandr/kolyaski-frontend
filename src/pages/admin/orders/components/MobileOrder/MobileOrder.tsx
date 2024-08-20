import MobileOrderLayout from "./MobileOrderLayout";
import {OrderType} from "@/types/OrderType";
import MobileOrderPrice from "@/pages/admin/orders/components/MobileOrderPrice/MobileOrderPrice";
import Button from "@/common-components/Button";
import MobileOrderElement from "@/pages/admin/orders/components/MobileOrderElement/MobileOrderElement";
import {useRouter} from "next/router";
import MobileOrderButton from "@/pages/admin/orders/components/MobileOrderButton/MobileOrderButton";

type MobileOrderProps = {
    order: OrderType,
}

const MobileOrder = (props: MobileOrderProps) => {
    const {order} = props;
    const {id, date, firstName, surname} = order;
    const link = `/admin/orders/${id}`;

    return (
        <MobileOrderLayout>
            <MobileOrderPrice {...order}/>
            <MobileOrderElement text={"ID"} value={id}/>
            <MobileOrderElement text={"Дата"} value={date}/>
            <MobileOrderElement text={"Ім'я"} value={firstName}/>
            <MobileOrderElement text={"Прізвище"} value={surname}/>
            <MobileOrderButton link={link}/>
        </MobileOrderLayout>
    )
}

export default MobileOrder;