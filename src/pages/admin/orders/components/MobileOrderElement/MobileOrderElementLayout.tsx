import {LayoutProps} from "@/types/LayoutProps";

const MobileOrderElementLayout = (props: LayoutProps) => {
    const {children} = props;

    return (
        <div className={"border-t border-t-neutral-200 px-3 py-1.5 flex items-center justify-between"}>
            {children}
        </div>
    )
}

export default MobileOrderElementLayout;