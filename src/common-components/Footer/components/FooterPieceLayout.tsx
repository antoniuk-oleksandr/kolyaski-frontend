import {LayoutProps} from "@/types/LayoutProps";
import Wrapper from "@/common-components/Wrapper";
import {Children} from "react";

type FooterPieceLayoutProps = LayoutProps & {
    bgColor: string,
}

const FooterPieceLayout = (props: FooterPieceLayoutProps) => {
    const {children, bgColor} = props;

    return (
        <div className={`w-full pt-6 pb-3 ${bgColor}`}>
            <Wrapper>
                <div className={"grid grid-cols-3 phone:flex phone:flex-col"}>
                    {Children.map(children, (child, index) => (
                        <div className={"p-3 text-sm flex flex-col gap-y-3.5 font-medium text-wrap phone:pb-6"} key={index}>
                            {child}
                        </div>
                    ))}
                </div>
            </Wrapper>
        </div>
    )
}

export default FooterPieceLayout;