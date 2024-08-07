import {LayoutProps} from "@/types/LayoutProps";

const MobileOrderButtonLayout = (props: LayoutProps) => {
    const {children} = props;

    return (
        <div className={"mb-3 mx-3 mt-6"}>
            {children}
        </div>
    )
}

export default MobileOrderButtonLayout;