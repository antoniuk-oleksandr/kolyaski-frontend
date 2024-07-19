import {LayoutProps} from "@/types/LayoutProps";
import {Children} from "react";

const HomeRightSideProductLayout = (props: LayoutProps) => {
    const {children} = props;
    const childrenArr = Children.toArray(children);

    return (
        <div className={"flex gap-x-3 text-sm items-center"}>
            {childrenArr[0]}
            <div className={"flex flex-1 flex-col gap-y-1"}>
                {childrenArr.slice(1, 3)}
            </div>
        </div>
    )
}

export default HomeRightSideProductLayout;