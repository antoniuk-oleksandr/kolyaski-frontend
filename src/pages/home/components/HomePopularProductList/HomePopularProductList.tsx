import HomePopularProductListLayout from "./HomePopularProductListLayout";
import {getPopularProductListTitle, makeChunksOfHomeLists} from "@/pages/home/helpers";
import HomePopularProduct from "@/pages/home/components/HomePopularProduct/HomePopularProduct";
import Carousel from "@/common-components/Carousel/Carousel";
import {HomeData} from "@/types/HomeData";
import {useViewportSize} from "@mantine/hooks";
import PopularProductsCarouselControllers
    from "@/pages/home/components/PopularProductLists/components/PopularProductsCarouselControllers/PopularProductsCarouselControllers";
import {useState} from "react";

type HomePopularProductListProps = {
    homeDataKey: string,
    homeData: HomeData,
}

const HomePopularProductList = (props: HomePopularProductListProps) => {
    const {homeDataKey, homeData} = props;
    const homeDataList = homeData[homeDataKey as keyof HomeData];
    const {width} = useViewportSize();
    const isMobile = width < 960;
    const chunks = makeChunksOfHomeLists(homeDataList, isMobile ? 2 : 4);
    const [carouselIndex, setCarouselIndex] = useState(0);

    if (homeDataList.length === 0) return null;
    return (
        <HomePopularProductListLayout>
            <h2 className={"text-2xl text-primary pb-3"}>{getPopularProductListTitle(homeDataKey)}</h2>
            <Carousel index={carouselIndex}>
                {chunks.map((outerItem, outerIndex) => (
                    <div className={"grid grid-cols-4 phone:grid-cols-2 gap-3"} key={outerIndex}>
                        {outerItem.map((innerItem, innerIndex) => (
                            <HomePopularProduct item={innerItem} key={innerIndex}/>
                        ))}
                    </div>
                ))}
            </Carousel>
            <PopularProductsCarouselControllers
                numberOfCircles={chunks.length}
                carouselIndex={carouselIndex}
                setCarouselIndex={setCarouselIndex}
            />
        </HomePopularProductListLayout>
    )
}

export default HomePopularProductList;