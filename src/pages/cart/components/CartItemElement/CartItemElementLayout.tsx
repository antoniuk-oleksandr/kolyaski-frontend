import {LayoutProps} from "@/types/LayoutProps";

type CartItemElementLayoutProps = LayoutProps & {
    bottomBorderShown: boolean,
    gridCols?: string,
    gridColsPhone?: string,
}

const CartItemElementLayout = (props: CartItemElementLayoutProps) => {
    const {children, bottomBorderShown, gridCols, gridColsPhone} = props;

    return (
        <div className={"w-full flex"}>
            <div className={`grid w-full py-3 gap-x-3 items-center text-sm phone:gap-y-3
            ${bottomBorderShown ? 'border-b border-neutral-200' : ''}
            ${gridCols === undefined ? 'grid-cols-cartElement' : gridCols}
            ${gridColsPhone === undefined ? 'phone:grid-cols-cartPhoneElement' : gridColsPhone}
            `}>
                {children}
            </div>
        </div>
    );
}

export default CartItemElementLayout;
