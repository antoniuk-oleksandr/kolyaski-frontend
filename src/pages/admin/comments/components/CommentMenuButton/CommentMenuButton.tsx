import {FaCaretDown} from "react-icons/fa6";
import {toggleCommentsSelectMenu} from "@/pages/admin/comments/helpers";
import {MutableRefObject} from "react";

type CommentMenuButtonProps = {
    menuButtonRef: MutableRefObject<HTMLDivElement | null>,
}

const CommentMenuButton = (props: CommentMenuButtonProps) => {
    const {menuButtonRef} = props;

    return (
        <div
            className={"grid place-items-center cursor-pointer duration-200 ease-out hover:bg-gray-300 hover:ring-[8px] rounded-full ring-gray-300"}
            ref={menuButtonRef}
            onClick={toggleCommentsSelectMenu}
        >
            <FaCaretDown
                className={"text-xs "}
            />
        </div>
    )
}

export default CommentMenuButton;