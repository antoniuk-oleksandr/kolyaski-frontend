import {LayoutProps} from "@/types/LayoutProps";
import HomeCenterLeftSide from "@/pages/home/components/HomeLeftSide/HomeCenterLeftSide";

const HomeCenterLeftSideLayout = (props: LayoutProps) => {
    const {children} = props;

    return (
        <div className={"flex flex-col"}>
            {children}
        </div>
    )
}

export default HomeCenterLeftSideLayout;