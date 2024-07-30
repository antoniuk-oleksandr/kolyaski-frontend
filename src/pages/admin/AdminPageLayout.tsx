import {LayoutProps} from "@/types/LayoutProps";

const AdminPageLayout = (props: LayoutProps) => {
    const {children} = props;

    return (
        <div className={"flex h-fit flex-col grow"}>
            {children}
        </div>
    )
}

export default AdminPageLayout;