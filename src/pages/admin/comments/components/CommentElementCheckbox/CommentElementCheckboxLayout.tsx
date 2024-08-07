import {LayoutProps} from "@/types/LayoutProps";

const CommentElementCheckboxLayout = (props: LayoutProps) => {
    const {children} = props;

    return (
        <div className={"relative phone:row-span-2"}>
            {children}
        </div>
    )
}

export default CommentElementCheckboxLayout;