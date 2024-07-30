import {Dispatch, SetStateAction, useEffect, useState} from "react";
import {CommentsState} from "@/types/CommentsState";

export const useCommentCheckboxes = (
    commentsState: CommentsState,
    setChecked: Dispatch<SetStateAction<boolean>>,
) => {
    const {unreadComments, readComments} = commentsState;
    const [indeterminate, setIndeterminate] = useState(false);

    useEffect(() => {
        if (!unreadComments || !readComments) return;
        const arr = [...unreadComments.map((item) => item.isSelected),
            ...readComments.map((item) => item.isSelected)];

        const checkedCount = arr.filter((value) => value).length;
        setIndeterminate(checkedCount > 0 && checkedCount < arr.length);
        setChecked(checkedCount > 0);
    }, [unreadComments, readComments]);

    return {indeterminate};
}