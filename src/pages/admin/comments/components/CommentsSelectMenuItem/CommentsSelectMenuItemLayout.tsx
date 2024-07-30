import {LayoutProps} from "@/types/LayoutProps";
import {CommentsSelectMenuItemType} from "@/types/CommentsSelectMenuItemType";
import {toggleCommentsSelectMenu} from "@/pages/admin/comments/helpers";

type CommentsSelectMenuItemLayoutProps = CommentsSelectMenuItemType & LayoutProps;

const CommentsSelectMenuItemLayout = (props: CommentsSelectMenuItemLayoutProps) => {
    const {children, action} = props;

    return (
        <div
            onClick={() => {
                toggleCommentsSelectMenu();
                action();
            }}
            className={"px-6 py-3 bg-transparent hover:bg-comments cursor-pointer select-none"}>
            {children}
        </div>
    )
}

export default CommentsSelectMenuItemLayout;