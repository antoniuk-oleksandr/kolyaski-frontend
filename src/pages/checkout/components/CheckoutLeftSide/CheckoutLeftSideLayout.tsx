import {LayoutProps} from "@/types/LayoutProps";

const CheckoutLeftSideLayout = (props: LayoutProps) => {
    const {children} = props;

    return (
        <div className={"m-3 flex-1 phone:mx-0"}>
            {children}
        </div>
    )
}

export default CheckoutLeftSideLayout;