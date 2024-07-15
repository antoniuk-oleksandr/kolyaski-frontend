import {LayoutProps} from "@/types/LayoutProps";

const CheckoutRightSideLayout = (props: LayoutProps) => {
    const {children} = props;

    return (
        <div className={"top-6 sticky w-80 p-3 bg-white m-3 phone:mx-0 rounded-md justify-between text-sm h-fit phone:w-full"}>
            {children}
        </div>
    )
}

export default CheckoutRightSideLayout;