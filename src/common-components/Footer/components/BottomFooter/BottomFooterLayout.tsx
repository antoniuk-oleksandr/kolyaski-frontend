import {LayoutProps} from "@/types/LayoutProps";
import {Children, Key} from "react";
import Wrapper from "@/common-components/Wrapper";

const BottomFooterLayout = (props: LayoutProps) => {
    const {children} = props;

    return (
        <div className={"bg-white"}>
            <Wrapper>
                <div
                    className={"items-center grid grid-cols-3 phone:grid-cols-1 phone:grid-rows-2 p-3 phone:gap-y-1.5"}>
                    {Children.map(children, (child, index: Key) => (
                        <div
                            className={`w-full flex items-center phone:justify-center
                    ${index === 1 ? 'justify-center phone:row-start-1 ' : ''}
                    ${index === 0 ? 'col-span-2 phone:row-start-2' : ''}
                    `}
                            key={index}
                        >
                            {child}
                        </div>
                    ))}
                </div>
            </Wrapper>
        </div>
    )
}

export default BottomFooterLayout;