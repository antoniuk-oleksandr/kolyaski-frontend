import {LayoutProps} from "@/types/LayoutProps";

const CommentsBlockLayout = (props: LayoutProps) => {
    const {children} = props;

    return (
        <div className={"bg-white rounded-md grow"}>
            {children}
        </div>
    )
}

export default CommentsBlockLayout;