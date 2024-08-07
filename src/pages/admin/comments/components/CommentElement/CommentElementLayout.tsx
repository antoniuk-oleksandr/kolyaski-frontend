import {LayoutProps} from "@/types/LayoutProps";
import {Dispatch, SetStateAction, useRef} from "react";
import {useRouter} from "next/router";
import {handleCommentElementClick} from "@/pages/admin/comments/handlers";
import {useSelector} from "react-redux";
import {ReduxState} from "@/types/ReduxState";

type CommentElementLayoutProps = LayoutProps & {
    setCommentHovered: Dispatch<SetStateAction<boolean>>,
    isLast: boolean,
    isSelected: boolean,
    id: number,
}

const CommentElementLayout = (props: CommentElementLayoutProps) => {
    const {children, setCommentHovered, isLast, isSelected, id} = props;
    const {page, value} = useSelector((state: ReduxState) => state.comments);
    const elementRef = useRef<HTMLDivElement | null>(null);
    const router = useRouter();

    return (
        <div
            ref={elementRef}
            onClick={(e) => handleCommentElementClick(e, id, router, elementRef, page, value)}
            onMouseEnter={() => setCommentHovered(true)}
            onMouseLeave={() => setCommentHovered(false)}
            className={`hover:shadow py-2.5 border-t border-neutral-200 relative font-semibold text-sm grid items-center grid-cols-commentElement gap-x-3 px-6 cursor-pointer ease-out duration-200 
            phone:grid-rows-2 phone:grid-cols-commentPhoneElement
            ${isLast && 'border-b'} 
            ${isSelected ? 'bg-blue-500 text-white border-blue-600' : 'hover:bg-comments'}`}>
            {children}
        </div>
    )
}

export default CommentElementLayout;