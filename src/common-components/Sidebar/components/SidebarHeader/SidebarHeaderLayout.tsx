import {LayoutProps} from "@/types/LayoutProps";

const SidebarHeaderLayout = (props: LayoutProps) => {
    const {children} = props;

    return (
        <div className={"bg-white rounded-t-md"}>
            <div
                className={"flex px-3 py-2.5 gap-x-3 text-base font-semibold uppercase items-center bg-secondary rounded-md text-white"}>
                {children}
            </div>
        </div>
    )
}

export default SidebarHeaderLayout;