import {LayoutProps} from "@/types/LayoutProps";

type CartItemElementLayoutProps = LayoutProps & {
    bottomBorderShown: boolean,
}

const CartItemElementLayout = (props: CartItemElementLayoutProps) => {
    const {children, bottomBorderShown} = props;

    return (
        <div className={"w-full flex"}>
            <div className={`grid w-full py-3 grid-cols-cartElement gap-x-3 items-center text-sm phone:grid-cols-cartPhoneElement phone:gap-y-3
            ${bottomBorderShown ? 'border-b border-neutral-200' : ''}`}>
                {children}
            </div>
        </div>
    );
}

export default CartItemElementLayout;
