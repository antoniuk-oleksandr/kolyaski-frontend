import {LayoutProps} from "@/types/LayoutProps";

const OrderComponentLayout = (props: LayoutProps) => {
    const {children} = props;

    return (
        <div className={"pb-1 mb-6 relative"}>
            {children}
        </div>
    )
}

export default OrderComponentLayout;