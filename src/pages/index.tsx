import Sidebar from "@/common-components/Sidebar/Sidebar";
import HomeCarousel from "@/pages/home/components/HomeCarousel/HomeCarousel/HomeCarousel";
import BrandList from "@/pages/home/components/BrandList/BrandList";
import PageContentLayout from "@/common-components/PageContentLayout";
import HomeBottomContent from "@/pages/home/components/HomeBottom/HomeBottomContent/HomeBottomContent";

export default function Home() {
    return (
        <>
            <PageContentLayout>
                <Sidebar/>
                <HomeCarousel/>
            </PageContentLayout>
            <BrandList/>
            <HomeBottomContent/>
        </>
    );
}
