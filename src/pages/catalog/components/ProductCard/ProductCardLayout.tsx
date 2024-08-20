import {LayoutProps} from "@/types/LayoutProps";
import {useRouter} from "next/router";
import React from "react";
import SoldOutOverlay from "@/pages/catalog/components/SoldOutOverlay/SoldOutOverlay";

type ProductCardLayoutProps = LayoutProps & {
    id: number,
    quantity: number,
}

const ProductCardLayout = (props: ProductCardLayoutProps) => {
    const {children, id} = props;
    const router = useRouter();

    return (
        <div
            onClick={() => router.push(`/product/${id}`)}
            className={`relative size-full cursor-pointer mx-auto bg-white rounded-lg overflow-hidden transform transition phone:transform-none phone:transition-none duration-200 hover:scale-105 phone:!scale-100`}
        >
            <SoldOutOverlay {...props}/>
            {children}
        </div>
    );
}

export default ProductCardLayout;
