import {LayoutProps} from "@/types/LayoutProps";

const AdminProductListHeadLayout = (props: LayoutProps) => {
    const {children} = props;

    return (
        <div className={"text-sm select-none grid border-b border-b-neutral-200 bg-white py-1.5 px-6 gap-x-3 font-semibold grid-cols-adminProductsColumns"}>
            {children}
        </div>
    )
}

export default AdminProductListHeadLayout;