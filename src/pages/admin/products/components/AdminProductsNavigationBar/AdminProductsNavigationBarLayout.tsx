import {LayoutProps} from "@/types/LayoutProps";

const AdminProductsNavigationBarLayout = (props: LayoutProps) => {
    const {children} = props;

    return (
        <div className={"bg-gray-200 w-full h-12 phone:h-fit phone:gap-y-3 phone:py-3 rounded-t-md flex items-center px-6 justify-between phone:flex-col"}>
            {children}
        </div>
    )
}

export default AdminProductsNavigationBarLayout;