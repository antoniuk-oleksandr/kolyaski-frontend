import ProductsLeftSideLayout from "./ProductsLeftSideLayout";
import Sidebar from "@/common-components/Sidebar/Sidebar";
import SideCard from "@/common-components/SideCard/SideCard";
import ProductPriceSlider from "@/pages/catalog/components/ProductPriceSlider/ProductPriceSlider";
import {SearchParams} from "@/types/SearchParams";

type ProductsLeftSideProps = {
    searchParams: SearchParams;
}

const ProductsLeftSide = (props: ProductsLeftSideProps) => {
    return (
        <ProductsLeftSideLayout>
            <Sidebar/>
            <ProductPriceSlider {...props}/>
            <SideCard
                aspect={' '}
                bgColor={"bg-primary"}
                firstLineText={"Товари"}
                firstLineTextStyle={"text-[22px] phone:text-4xl uppercase font-semibold"}
                secondLineText={"від кращих виробників"}
                secondLineTextStyle={"text-lg font-semibold uppercase phone:text-3xl"}
                imageSrc={"/images/products1.jpg"}
                buyButtonStyles={"bg-secondary hover:bg-white hover:text-neutral-600"}
                link={"/product?sortType=за+полулярністю"}
            />
        </ProductsLeftSideLayout>
    )
}

export default ProductsLeftSide;