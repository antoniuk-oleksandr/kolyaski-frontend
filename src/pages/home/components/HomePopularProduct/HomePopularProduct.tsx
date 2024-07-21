import HomePopularProductLayout from "./HomePopularProductLayout";
import {RestrictedProduct} from "@/types/RestrictedProduct";
import HomePopularProductImage
    from "@/pages/home/components/HomePopularProduct/components/HomePopularProductImage/HomePopularProductImage";
import HomeProductDescription
    from "@/pages/home/components/HomePopularProduct/components/HomeProductDescription/HomeProductDescription";

type HomePopularProductProps = {
    item: RestrictedProduct,
    border?: boolean,
}

const HomePopularProduct = (props: HomePopularProductProps) => {
    const {item} = props;
    const {image} = item;

    return (
        <HomePopularProductLayout {...props} {...item}>
            <HomePopularProductImage src={image}/>
            <HomeProductDescription {...item}/>
        </HomePopularProductLayout>
    )
}

export default HomePopularProduct;