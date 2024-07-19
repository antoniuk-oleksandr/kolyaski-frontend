import {LayoutProps} from "@/types/LayoutProps";
import {Children} from "react";

const PopularProductTypesBlockLayout = (props: LayoutProps) => {
    const {children} = props;
    const childrenArr = Children.toArray(children);

    return (
        <div className={"p-3 phone:px-0"}>
            <div className={"p-3 bg-white rounded-md"}>
                {childrenArr[0]}
                <div className={"w-full grid grid-cols-4 phone:grid-cols-2 gap-3"}>
                    {childrenArr.slice(1, childrenArr.length)}
                </div>
            </div>
        </div>
    )
}

export default PopularProductTypesBlockLayout;