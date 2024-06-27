import { LayoutProps } from "@/types/LayoutProps";
import {useRouter} from "next/router";

type ProductCardLayoutProps = LayoutProps & {
    id: number,
}

const ProductCardLayout = (props: ProductCardLayoutProps) => {
    const { children, id } = props;
    const router = useRouter();

    return (
        <div
            onClick={() => router.push(`/products/${id}`)}
            className="cursor-pointer mx-auto bg-white rounded-lg overflow-hidden transform transition duration-200 hover:scale-105">
            {children}
        </div>
    );
}

export default ProductCardLayout;
