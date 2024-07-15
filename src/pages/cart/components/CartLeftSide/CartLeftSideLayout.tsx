import {LayoutProps} from "@/types/LayoutProps";

const CartLeftSideLayout = (props: LayoutProps) => {
    const {children} = props;

    return (
        <div className={"w-2/3 bg-white rounded-md phone:w-full p-3 m-3 phone:mx-0 h-fit"}>
            {children}
        </div>
    )
}

export default CartLeftSideLayout;