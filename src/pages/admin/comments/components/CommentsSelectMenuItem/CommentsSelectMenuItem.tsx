import CommentsSelectMenuItemLayout from "./CommentsSelectMenuItemLayout";
import {CommentsSelectMenuItemType} from "@/types/CommentsSelectMenuItemType";

type CommentsSelectMenuItemProps = CommentsSelectMenuItemType;

const CommentsSelectMenuItem = (props: CommentsSelectMenuItemProps) => {
    const {text} = props;

    return (
        <CommentsSelectMenuItemLayout {...props}>
            <p>{text}</p>
        </CommentsSelectMenuItemLayout>
    )
}

export default CommentsSelectMenuItem;