import {LayoutProps} from "@/types/LayoutProps";
import Wrapper from "@/common-components/Wrapper";

const PageLayout = (props: LayoutProps) => {
    const {children} = props;

    return (
        <div className={"min-h-pageLayout phone:min-h-pageLayoutMobile p-3 flex"}>
            <Wrapper>
                {children}
            </Wrapper>
        </div>
    )
}

export default PageLayout;