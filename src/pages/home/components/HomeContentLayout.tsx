import {LayoutProps} from "@/types/LayoutProps";

const HomeContentLayout = (props: LayoutProps) => {
    const {children} = props;

    return (
        <div className={"flex phone:flex-col"}>
            {children}
        </div>
    )
}

export default HomeContentLayout;