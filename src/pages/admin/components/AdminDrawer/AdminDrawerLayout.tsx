import {LayoutProps} from "@/types/LayoutProps";

const AdminDrawerLayout = (props: LayoutProps) => {
    const {children} = props;

    return (
        <div>
            {children}
        </div>
    )
}

export default AdminDrawerLayout;