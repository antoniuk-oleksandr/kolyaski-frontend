import CommentsSelectButtonLayout
    from "@/pages/admin/comments/components/CommentsSelectButton/CommentsSelectButtonLayout";
import CommentsSelectMenu from "@/pages/admin/comments/components/CommentsSelectMenu/CommentsSelectMenu";
import {Dispatch, SetStateAction, useRef, useState} from "react";
import CommentMenuButton from "@/pages/admin/comments/components/CommentMenuButton/CommentMenuButton";
import {CommentItemType} from "@/types/CommentItemType";
import CommentsSelectButtonOverlay
    from "@/pages/admin/comments/components/CommentsSelectButtonOverlay/CommentsSelectButtonOverlay";
import CommentsSelectMenuCheckbox
    from "@/pages/admin/comments/components/CommentsSelectMenuCheckbox/CommentsSelectMenuCheckbox";
import {Tooltip} from "@mantine/core";

type CommentsSelectButtonProps = {
    commentItems: CommentItemType[],
    indeterminate: boolean,
    checked: boolean,
    setChecked: Dispatch<SetStateAction<boolean>>,
}

const CommentsSelectButton = (props: CommentsSelectButtonProps) => {
    const {indeterminate} = props;
    const menuButtonRef = useRef<HTMLDivElement | null>(null);

    return (
        <CommentsSelectButtonLayout>
            <Tooltip className={"mt-1"} position={"bottom"} label={'Вибрати'}>
                <div className={"flex items-center gap-x-2"}>
                    <CommentsSelectMenuCheckbox
                        {...props}
                        indeterminate={indeterminate}
                    />
                    <CommentMenuButton menuButtonRef={menuButtonRef}/>
                </div>
            </Tooltip>
            <CommentsSelectMenu
                menuButtonRef={menuButtonRef}
                {...props}
            />
        </CommentsSelectButtonLayout>
    )
}

export default CommentsSelectButton;