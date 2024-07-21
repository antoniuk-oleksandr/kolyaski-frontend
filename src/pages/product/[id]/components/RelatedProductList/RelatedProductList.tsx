import RelatedProductListLayout from "./RelatedProductListLayout";
import PageTitle from "@/common-components/PageTitle";
import {RestrictedProduct} from "@/types/RestrictedProduct";
import {useViewportSize} from "@mantine/hooks";
import {getPopularProductListTitle, makeChunksOfHomeLists} from "@/pages/home/helpers";
import Carousel from "@/common-components/Carousel/Carousel";
import HomePopularProduct from "@/pages/home/components/HomePopularProduct/HomePopularProduct";
import PopularProductsCarouselControllers
    from "@/pages/home/components/PopularProductLists/components/PopularProductsCarouselControllers/PopularProductsCarouselControllers";
import {useState} from "react";

type RelatedProductListProps = {
    relatedProducts: RestrictedProduct[],
}

const RelatedProductList = (props: RelatedProductListProps) => {
    const {relatedProducts} = props;
    const {width} = useViewportSize();
    const isMobile = width < 960;
    const chunks = makeChunksOfHomeLists(relatedProducts, isMobile ? 2 : 4);
    const [carouselIndex, setCarouselIndex] = useState(0);

    return (
        <RelatedProductListLayout>
            <h2 className={"text-2xl text-primary mb-3"}>Супутні товари та аксесуари</h2>
            <Carousel index={carouselIndex}>
                {chunks.map((outerItem, outerIndex) => (
                    <div className={"grid grid-cols-4 phone:grid-cols-2 gap-3"} key={outerIndex}>
                        {outerItem.map((innerItem, innerIndex) => (
                            <HomePopularProduct border={false} item={innerItem} key={innerIndex}/>
                        ))}
                    </div>
                ))}
            </Carousel>
            <PopularProductsCarouselControllers
                numberOfCircles={chunks.length}
                carouselIndex={carouselIndex}
                setCarouselIndex={setCarouselIndex}
            />
        </RelatedProductListLayout>
    )
}

export default RelatedProductList;