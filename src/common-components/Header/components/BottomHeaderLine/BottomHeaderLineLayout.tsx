import {LayoutProps} from "@/types/LayoutProps";
import Wrapper from "@/common-components/Wrapper";

const BottomHeaderLineLayout = (props: LayoutProps) => {
    const {children} = props;

    return (
        <div className={"w-full bg-primary py-3"}>
            <Wrapper>
                <div className={"w-full grid grid-cols-headerColumns phone:grid-cols-1 phone:gap-y-3"}>
                    {children}
                </div>
            </Wrapper>
        </div>
    )
}

export default BottomHeaderLineLayout;