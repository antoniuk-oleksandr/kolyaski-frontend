import ComponentElementIcon from "@/pages/admin/comments/components/ComponentElementIcon";
import {FaChevronLeft, FaChevronRight} from "react-icons/fa";
import {Tooltip} from "@mantine/core";
import {useRouter} from "next/router";
import {OrdersState} from "@/types/OrdersState";
import {CommentsState} from "@/types/CommentsState";
import {AdminProductsState} from "@/types/AdminProductsState";

type CommentPageChangeArrowProps = {
    left: boolean,
    onePageItems: number,
    state: OrdersState | CommentsState | AdminProductsState,
    link: string,
    linkParams?: string,
}

const AdminPageChangeArrow = (props: CommentPageChangeArrowProps) => {
    const {left, onePageItems, state, link, linkParams} = props;
    const {onPageCount, totalCount, page, value} = state;
    const router = useRouter();
    if (!page || !onPageCount || !totalCount) return;
    const isArrowDisabled = left ? page === 1 : ((page - 1) * onePageItems + onPageCount === totalCount);
    const pagePart = `?page=${left ? page - 1 : page + 1}`;
    const valuePart = value === "" ? "" : `?value=${value}`;
    const linkParamsPart = linkParams === undefined ? "" : linkParams;
    const pushLink = `${link}${pagePart}${valuePart}${linkParamsPart}`;

    return (
        <Tooltip
            className={"mt-1"}
            label={`${left ? 'Попередня' : 'Наступна'} сторінка`} position={"bottom"}
        >
            <div className={`ml-5 ${isArrowDisabled ? 'text-neutral-400' : ''}`}>
                <ComponentElementIcon
                    action={() => router.push(pushLink)}
                    isDisabled={isArrowDisabled}
                    icon={left ? <FaChevronLeft/> : <FaChevronRight/>}/>
            </div>
        </Tooltip>
    )
}

export default AdminPageChangeArrow;