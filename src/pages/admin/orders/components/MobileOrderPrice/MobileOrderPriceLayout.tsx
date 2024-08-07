import {LayoutProps} from "@/types/LayoutProps";

const MobileOrderPriceLayout = (props: LayoutProps) => {
    const {children} = props;

    return (
        <div className={"flex justify-between items-center p-3 pb-3"}>
            {children}
        </div>
    )
}

export default MobileOrderPriceLayout;