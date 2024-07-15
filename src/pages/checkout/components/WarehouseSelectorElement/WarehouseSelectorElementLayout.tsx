import {LayoutProps} from "@/types/LayoutProps";

const WarehouseSelectorElementLayout = (props: LayoutProps) => {
    const {children} = props;

    return (
        <div className={"relative"}>
            {children}
        </div>
    )
}

export default WarehouseSelectorElementLayout;