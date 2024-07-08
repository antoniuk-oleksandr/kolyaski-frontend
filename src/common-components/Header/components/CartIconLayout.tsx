import {LayoutProps} from "@/types/LayoutProps";
import {Dispatch, SetStateAction} from "react";

type CartIconLayoutProps = LayoutProps & {
    setHovered: Dispatch<SetStateAction<boolean>>;
}

const CartIconLayout = (props: CartIconLayoutProps) => {
    const {children, setHovered} = props;

    return (
        <div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className={"relative"}
        >
            {children}
        </div>
    )
}

export default CartIconLayout;