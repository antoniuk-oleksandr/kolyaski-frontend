import {LayoutProps} from "@/types/LayoutProps";
import {Children} from "react";

const CommentsBlockButtonsLayout = (props: LayoutProps) => {
    const {children} = props;
    const childArr = Children.toArray(children);

    return (
        <div className={"px-6 py-3.5 flex justify-between gap-x-4 items-center bg-gray-200 rounded-t-md"}>
            <div className={"flex gap-x-4 items-center h-fit"}>
                {childArr.slice(0, childArr.length - 1)}
            </div>
            <div className={"flex items-center"}>
                {childArr[childArr.length - 1]}
            </div>
        </div>
    )
}

export default CommentsBlockButtonsLayout;