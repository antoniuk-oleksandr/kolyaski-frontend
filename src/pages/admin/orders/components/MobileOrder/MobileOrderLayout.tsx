import {LayoutProps} from "@/types/LayoutProps";

const MobileOrderLayout = (props: LayoutProps) => {
    const {children} = props;

    return (
        <div className={"bg-white rounded-md text-sm"}>
            {children}
        </div>
    )
}

export default MobileOrderLayout;