import Sidebar from "@/common-components/Sidebar/Sidebar";
import HomeCarousel from "@/pages/home/components/HomeCarousel/HomeCarousel/HomeCarousel";
import BrandList from "@/pages/home/components/BrandList/BrandList";
import HomeContentLayout from "@/pages/home/components/HomeContentLayout";
import HomeBottomContent from "@/pages/home/components/HomeBottom/HomeBottomContent/HomeBottomContent";

export default function Home() {
    return (
        <>
            <HomeContentLayout>
                <Sidebar/>
                <HomeCarousel/>
            </HomeContentLayout>
            <BrandList/>
            <HomeBottomContent/>
        </>
    );
}
