import {useSelector} from "react-redux";
import {ReduxState} from "@/types/ReduxState";
import {handleOrdersHeadClick} from "@/pages/admin/orders/handlers";
import {headerItems} from "@/pages/admin/orders/components/headerItems";
import {useRouter} from "next/router";
import OrderColumnSortButton from "@/pages/admin/orders/components/OrderColumnSortButton";

type OrdersTableHeadProps = {
    tableCellStyles: string,
    isMobile: boolean,
}

const OrdersTableHead = (props: OrdersTableHeadProps) => {
    const {tableCellStyles, isMobile} = props;
    const ordersState = useSelector((state: ReduxState) => state.ordersState);
    const {sortBy, sortOrder} = ordersState;
    const router = useRouter();

    if (!sortBy || !sortOrder || isMobile) return null;
    return (
        <div>
            <div className={"grid grid-cols-ordersColumns !font-semibold"}>
                {headerItems.map((item, index) => (
                    <div
                        onClick={() => handleOrdersHeadClick(router, item.id, ordersState)}
                        key={index}
                        className={`${tableCellStyles} 
                        ${index === 0 ? 'pl-6' : ''}
                        ${index === headerItems.length - 1 ? 'pr-6' : ''}
                        cursor-pointer`}
                    >
                        <span>{item.text}</span>
                        <OrderColumnSortButton {...item}/>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default OrdersTableHead;