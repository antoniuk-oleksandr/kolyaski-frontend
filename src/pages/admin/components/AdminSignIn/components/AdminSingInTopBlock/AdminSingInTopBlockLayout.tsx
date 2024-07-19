import {LayoutProps} from "@/types/LayoutProps";

const AdminSingInTopBlockLayout = (props: LayoutProps) => {
    const {children} = props;

    return (
        <div className="text-center mb-6">
            {children}
        </div>
    )
}

export default AdminSingInTopBlockLayout;