import {LayoutProps} from "@/types/LayoutProps";

const CommentsSelectButtonLayout = (props: LayoutProps) => {
    const {children} = props;

    return (
        <div className={"flex gap-x-1 items-center relative "}>
            {children}
        </div>
    )
}

export default CommentsSelectButtonLayout;