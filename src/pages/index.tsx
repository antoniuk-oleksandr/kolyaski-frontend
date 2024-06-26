import Sidebar from "@/common-components/Sidebar/Sidebar";
import HomeCarousel from "@/pages/home/components/HomeCarousel/HomeCarousel";
import BrandList from "@/pages/home/components/BrandList/BrandList";

export default function Home() {
    return (
        <div>
            <div className={"flex phone:flex-col"}>
                <Sidebar/>
                <HomeCarousel/>
            </div>
            <BrandList/>
        </div>
    );
}
