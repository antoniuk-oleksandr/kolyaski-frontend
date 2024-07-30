import ComponentElementIcon from "@/pages/admin/comments/components/ComponentElementIcon";
import {FaChevronLeft, FaChevronRight} from "react-icons/fa";
import {Tooltip} from "@mantine/core";
import {useSelector} from "react-redux";
import {ReduxState} from "@/types/ReduxState";
import {useRouter} from "next/router";

type CommentPageChangeArrowProps = {
    left: boolean,
    onePageItems: number,
}

const CommentPageChangeArrow = (props: CommentPageChangeArrowProps) => {
    const {left, onePageItems} = props;
    const router = useRouter();
    const {commentsOnPageCount, totalCommentsCount, page, value} =
        useSelector((state: ReduxState) => state.comments);
    if (!page || !commentsOnPageCount || !totalCommentsCount) return;
    const isArrowDisabled = left ? page === 1 : ((page - 1) * onePageItems + commentsOnPageCount === totalCommentsCount);
    const link = `/admin/comments?page=${left ? page - 1 : page + 1}${value === '' ? '' : `?value=${value}`}`;

    return (
        <Tooltip
            className={"mt-1"}
            label={`${left ? 'Попередня' : 'Наступна'} сторінка`} position={"bottom"}
        >
            <div className={`ml-5 ${isArrowDisabled ? 'text-neutral-400' : ''}`}>
                <ComponentElementIcon
                    action={() => router.push(link)}
                    isDisabled={isArrowDisabled}
                    icon={left ? <FaChevronLeft/> : <FaChevronRight/>}/>
            </div>
        </Tooltip>
    )
}

export default CommentPageChangeArrow;