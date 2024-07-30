import Sidebar from "@/common-components/Sidebar/Sidebar";
import HomeCarousel from "@/pages/home/components/HomeCarousel/HomeCarousel/HomeCarousel";
import BrandList from "@/pages/home/components/BrandList/BrandList";
import PageContentLayout from "@/common-components/PageContentLayout";
import HomeBottomContent from "@/pages/home/components/HomeBottom/HomeBottomContent/HomeBottomContent";
import HomeCenterRightSide from "@/pages/home/components/HomeRightSide/HomeCenterRightSide";
import HomeCenterLeftSide from "@/pages/home/components/HomeLeftSide/HomeCenterLeftSide";
import {useHomeData} from "@/pages/home/use-home-data";
import LoaderElement from "@/common-components/LoaderElement";

export default function Home() {
    const {homeData} = useHomeData();

    if(!homeData) return <LoaderElement/>
    return (
        <>
            <PageContentLayout>
                <Sidebar/>
                <HomeCarousel/>
            </PageContentLayout>
            <BrandList/>
            <PageContentLayout>
                <HomeCenterLeftSide homeData={homeData}/>
                <HomeCenterRightSide homeData={homeData}/>
            </PageContentLayout>
            <HomeBottomContent/>
        </>
    );
}
