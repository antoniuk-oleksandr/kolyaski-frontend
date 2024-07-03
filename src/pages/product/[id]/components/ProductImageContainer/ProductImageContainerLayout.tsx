import {LayoutProps} from "@/types/LayoutProps";
import {Children, Fragment} from "react";

const CarouselLayout = (props: LayoutProps) => {
    const {children} = props;

    const childrenArr = Children.toArray(children);

    return (
        <div className={"flex phone:flex-col mt-12 gap-3"}>
            <div className={"w-[45%] phone:w-full"}>
                {childrenArr.slice(0, childrenArr.length - 1).map((child, index) => (
                    <Fragment key={index}>
                        {child}
                    </Fragment>
                ))}
            </div>
            {childrenArr[childrenArr.length - 1]}
        </div>
    )
}

export default CarouselLayout;