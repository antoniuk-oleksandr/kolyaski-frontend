import {LayoutProps} from "@/types/LayoutProps";

const CommentPageChangeElementLayout = (props: LayoutProps) => {
    const {children} = props;

    return (
        <div className={"flex items-center h-5 text-sm"}>
            {children}
        </div>
    )
}

export default CommentPageChangeElementLayout;