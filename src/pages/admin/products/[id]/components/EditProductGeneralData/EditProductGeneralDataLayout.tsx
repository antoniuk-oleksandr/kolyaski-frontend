import {LayoutProps} from "@/types/LayoutProps";
import {Children} from "react";

const EditProductGeneralDataLayout = (props: LayoutProps) => {
    const {children} = props;
    const childArr = Children.toArray(children);

    return (
        <div className={"mb-6"}>
            {childArr[0]}
            <div className={"grid grid-cols-2 gap-x-3 gap-y-6"}>
                {childArr.slice(1)}
            </div>
        </div>
    )
}

export default EditProductGeneralDataLayout;