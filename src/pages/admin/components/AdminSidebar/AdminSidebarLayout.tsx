import { LayoutProps } from "@/types/LayoutProps";

const AdminSidebarLayout = (props: LayoutProps) => {
    const { children } = props;

    return (
        <div className="flex flex-col border-r border-r-neutral-200 bg-white min-h-svh w-52">
            <div className="sticky top-[57px]">
                {children}
            </div>
        </div>
    )
}

export default AdminSidebarLayout;
