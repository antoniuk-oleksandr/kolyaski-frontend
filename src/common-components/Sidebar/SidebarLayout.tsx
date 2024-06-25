import {LayoutProps} from "@/types/LayoutProps";

const SidebarLayout = (props: LayoutProps) => {
    const {children} = props;

    return (
        <div className={"flex flex-col p-3 w-72 phone:px-0 phone:w-full"}>
            {children}
        </div>
    )
}

export default SidebarLayout;