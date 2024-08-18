import {LayoutProps} from "@/types/LayoutProps";

const MobileOrderButtonLayout = (props: LayoutProps) => {
    const {children} = props;

    return (
        <div className={"pb-3 px-3 pt-6 w-full"}>
            {children}
        </div>
    )
}

export default MobileOrderButtonLayout;