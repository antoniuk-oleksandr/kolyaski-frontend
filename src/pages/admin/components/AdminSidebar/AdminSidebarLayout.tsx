import { LayoutProps } from "@/types/LayoutProps";

const AdminSidebarLayout = (props: LayoutProps) => {
    const { children } = props;

    return (
        <div className="phone:hidden z-10 flex flex-col border-r border-r-neutral-200 bg-white min-h-adminSidebar w-52">
            <div className="sticky top-[57px]">
                {children}
            </div>
        </div>
    )
}

export default AdminSidebarLayout;
