import {LayoutProps} from "@/types/LayoutProps";

const WarehouseSelectorLayout = (props: LayoutProps) => {
    const {children} = props;

    return (
        <div className={"bg-white rounded-md w-full px-4 py-3 flex flex-col gap-y-1 text-sm"}>
            {children}
        </div>
    )
}

export default WarehouseSelectorLayout;