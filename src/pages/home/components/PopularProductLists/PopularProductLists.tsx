import {HomeData} from "@/types/HomeData";
import Carousel from "@/common-components/Carousel/Carousel";
import HomePopularProduct from "@/pages/home/components/HomePopularProduct/HomePopularProduct";
import PopularProductTypesBlockLayout
    from "@/pages/home/components/PopularProductTypesBlock/PopularProductTypesBlockLayout";
import {getPopularProductListTitle} from "@/pages/home/helpers";
import HomePopularProductList from "@/pages/home/components/HomePopularProductList/HomePopularProductList";

type PopularProductListsProps = {
    homeData: HomeData,

}

const PopularProductLists = (props: PopularProductListsProps) => {
    const {homeData} = props;
    const homeDataKeys = Object.keys(homeData);

    if(Object.values(homeData).some((value: any) => !value)) return null;
    return (
        <>
            {homeDataKeys.slice(0, homeDataKeys.length - 2).map((key, index) => (
                <HomePopularProductList {...props} key={index} homeDataKey={key}/>
            ))}
        </>
    )
}

export default PopularProductLists;