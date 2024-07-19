import HomePopularProductLayout from "./HomePopularProductLayout";
import {HomeDataElement} from "@/types/HomeDataElement";
import HomePopularProductImage
    from "@/pages/home/components/HomePopularProduct/components/HomePopularProductImage/HomePopularProductImage";
import HomeProductDescription
    from "@/pages/home/components/HomePopularProduct/components/HomeProductDescription/HomeProductDescription";

type HomePopularProductProps = {
    item: HomeDataElement,
}

const HomePopularProduct = (props: HomePopularProductProps) => {
    const {item} = props;
    const {image} = item;

    return (
        <HomePopularProductLayout {...item}>
            <HomePopularProductImage src={image}/>
            <HomeProductDescription {...item}/>
        </HomePopularProductLayout>
    )
}

export default HomePopularProduct;