import {LayoutProps} from "@/types/LayoutProps";

const HomeRightSideProductListLayout = (props: LayoutProps) => {
    const {children} = props;

    return (
        <div className={"flex flex-col gap-y-3"}>
            {children}
        </div>
    )
}

export default HomeRightSideProductListLayout;