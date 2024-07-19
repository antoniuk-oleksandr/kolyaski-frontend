import {LayoutProps} from "@/types/LayoutProps";

const AdminPageLayout = (props: LayoutProps) => {
    const {children} = props;

    return (
        <div className={"h-[2000px] flex flex-col"}>
            {children}
        </div>
    )
}

export default AdminPageLayout;