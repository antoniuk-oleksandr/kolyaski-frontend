import {LayoutProps} from "@/types/LayoutProps";

const SidebarContentLayout = (props: LayoutProps) => {
    const {children} = props;

    return (
        <div className={"w-full py-1.5 px-6 bg-white rounded-b-md"}>
            {children}
        </div>
    )
}

export default SidebarContentLayout;