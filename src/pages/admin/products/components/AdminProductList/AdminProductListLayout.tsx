import {LayoutProps} from "@/types/LayoutProps";

const AdminProductListLayout = (props: LayoutProps) => {
    const {children} = props;

    return (
        <div className={"bg-white phone:bg-transparent text-sm rounded-b-md flex flex-col phone:gap-y-3"}>
            {children}
        </div>
    )
}

export default AdminProductListLayout;