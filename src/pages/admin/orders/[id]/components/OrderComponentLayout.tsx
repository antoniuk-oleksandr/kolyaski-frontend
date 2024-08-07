import {LayoutProps} from "@/types/LayoutProps";

const OrderComponentLayout = (props: LayoutProps) => {
    const {children} = props;

    return (
        <div className={"mb-6"}>
            {children}
        </div>
    )
}

export default OrderComponentLayout;