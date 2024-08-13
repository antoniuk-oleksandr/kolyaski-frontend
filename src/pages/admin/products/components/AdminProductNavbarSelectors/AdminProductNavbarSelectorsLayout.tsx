import {LayoutProps} from "@/types/LayoutProps";

const AdminProductNavbarSelectorsLayout = (props: LayoutProps) => {
    const {children} = props;

    return (
        <div className={"flex gap-x-3"}>
            {children}
        </div>
    )
}

export default AdminProductNavbarSelectorsLayout;