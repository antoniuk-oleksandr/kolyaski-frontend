import {LayoutProps} from "@/types/LayoutProps";

const AdminHeaderLayout = (props: LayoutProps) => {
    const {children} = props;

    return (
        <div className={"border-b sticky top-0 border-b-neutral-200 bg-white w-full p-3 z-10 flex items-center justify-between"}>
            {children}
        </div>
    )
}

export default AdminHeaderLayout;