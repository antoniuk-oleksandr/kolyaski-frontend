import {LayoutProps} from "@/types/LayoutProps";

const CommentElementBodyLayout = (props: LayoutProps) => {
    const {children} = props;

    return (
        <div className={"px-6 text-pretty break-all"}>
            {children}
        </div>
    )
}

export default CommentElementBodyLayout;