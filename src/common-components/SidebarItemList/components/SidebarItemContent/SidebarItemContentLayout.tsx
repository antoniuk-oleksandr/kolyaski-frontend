import {LayoutProps} from "@/types/LayoutProps";

type SidebarItemContentLayoutProps = LayoutProps & {
    border?: boolean,
}

const SidebarItemContentLayout = (props: SidebarItemContentLayoutProps) => {
    const {children, border} = props;

    return (
        <div className={`flex pb-2 gap-x-1 ${border && "border-b"}`}>
            {children}
        </div>
    )
}

export default SidebarItemContentLayout;