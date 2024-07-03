import {LayoutProps} from "@/types/LayoutProps";
import {Dispatch, SetStateAction} from "react";

type ProductImageLayoutProps = LayoutProps & {
    setIsHovered: Dispatch<SetStateAction<boolean>>,
}

const ProductImageLayout = (props: ProductImageLayoutProps) => {
    const {children, setIsHovered} = props;

    return (
        <div
            onMouseLeave={() => setIsHovered(false)}
            className={"w-full relative overflow-hidden col-span-2 aspect-3x4 rounded-md"}>
            {children}
        </div>
    )
}

export default ProductImageLayout;