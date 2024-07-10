import {LayoutProps} from "@/types/LayoutProps";

const CartRightSideLayout = (props: LayoutProps) => {
    const {children} = props;

    return (
        <div className={"flex w-1/3 p-3 m-3 bg-white rounded-md phone:w-full phone:mx-0 flex-col h-fit"}>
            {children}
        </div>
    )
}

export default CartRightSideLayout;