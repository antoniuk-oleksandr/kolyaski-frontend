import {LayoutProps} from "@/types/LayoutProps";

const CommentElementCheckboxLayout = (props: LayoutProps) => {
    const {children} = props;

    return (
        <div className={"relative"}>
            {children}
        </div>
    )
}

export default CommentElementCheckboxLayout;