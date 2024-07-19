import HomeRightSideListElementLayout from "./HomeRightSideListElementLayout";
import {getPopularProductListTitle} from "@/pages/home/helpers";
import {HomeData} from "@/types/HomeData";
import HomeRightSideProduct from "@/pages/home/components/HomeRightSideProduct/HomeRightSideProduct";
import HomeRightSideProductListLayout from "@/pages/home/components/HomeRightSideProductListLayout";

type HomeRightSideListElementProps = {
    homeDataKey: string,
    homeData: HomeData,
}

const HomeRightSideListElement = (props: HomeRightSideListElementProps) => {
    const {homeDataKey, homeData} = props;
    const dataList = homeData[homeDataKey as keyof HomeData];

    if (dataList.length === 0) return null;
    return (
        <HomeRightSideListElementLayout>
            <h2 className={"text-lg text-primary pb-3"}>{getPopularProductListTitle(homeDataKey)}</h2>
            <HomeRightSideProductListLayout>
                {dataList.map((item, index) => (
                    <HomeRightSideProduct {...item} key={index}/>
                ))}
            </HomeRightSideProductListLayout>
        </HomeRightSideListElementLayout>
    )
}

export default HomeRightSideListElement;