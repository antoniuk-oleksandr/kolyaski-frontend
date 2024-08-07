import {LayoutProps} from "@/types/LayoutProps";
import {Children} from "react";

const OrderClientInformationLayout = (props: LayoutProps) => {
    const {children} = props;
    const childArr = Children.toArray(children);

    return (
        <div className={"mb-6"}>
            {childArr[0]}
            <div className="grid grid-cols-2 gap-3 mt-3">
                {childArr.slice(1, childArr.length - 1)}
            </div>
            <div className={"mt-3"}>
                {childArr[childArr.length - 1]}
            </div>
        </div>
    )
}

export default OrderClientInformationLayout;