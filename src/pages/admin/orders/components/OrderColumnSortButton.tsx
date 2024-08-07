import {useEffect, useRef, useState} from "react";
import {OrdersSortByEnum} from "@/types/OrdersSortByEnum";
import {useSelector} from "react-redux";
import {ReduxState} from "@/types/ReduxState";
import {FaCaretDown, FaCaretUp} from "react-icons/fa6";
import {SortOrderEnum} from "@/types/SortOrderEnum";

type OrderColumnSortButtonProps = {
    id: OrdersSortByEnum,
}


const OrderColumnSortButton = (props: OrderColumnSortButtonProps) => {
    const {id} = props;
    const {sortOrder, sortBy} = useSelector((state: ReduxState) => state.ordersState);

    const initial = useRef(sortOrder);
    const [isASC, setIsASC] = useState<boolean | null>(null);
    const [rotate, setRotate] = useState<boolean>(false);

    useEffect(() => {
        initial.current = sortOrder;
    }, [sortBy]);

    useEffect(() => {
        if (id === sortBy && sortOrder !== null) {
            if (sortOrder !== initial.current) {
                setRotate(true);
                initial.current = sortOrder;
            }
            setIsASC(sortOrder === SortOrderEnum.ASC);
        }
    }, [sortOrder, id, sortBy]);

    useEffect(() => {
        if (rotate) {
            const timer = setTimeout(() => setRotate(false), 100); // Match this with the animation duration
            return () => clearTimeout(timer);
        }
    }, [rotate]);

    if (id !== sortBy || sortOrder === null || sortBy === null) return null;

    const iconClass = `origin-center duration-200 ease-out ${rotate ? 'rotate-180' : ''}`;

    return isASC ? (
        <FaCaretUp className={iconClass}/>
    ) : (
        <FaCaretDown className={iconClass}/>
    );
};

export default OrderColumnSortButton;