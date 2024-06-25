import {LayoutProps} from "@/types/LayoutProps";

type SidebarItemListLayoutProps = LayoutProps & {
    menuStyles?: string,
}

const SidebarItemListLayout = (props: SidebarItemListLayoutProps) => {
    const {children, menuStyles} = props;

    return (
        <div className={`w-fit ${menuStyles}`}>
            {children}
        </div>
    )
}

export default SidebarItemListLayout;