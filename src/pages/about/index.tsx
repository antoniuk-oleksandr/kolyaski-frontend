import HomeContentLayout from "@/pages/home/components/HomeContentLayout";
import AboutLeftSide from "@/pages/about/components/AboutLeftSide/AboutLeftSide";
import BrandList from "@/pages/home/components/BrandList/BrandList";
import AboutRightSide from "@/pages/about/components/AboutRightSide/AboutRightSide";

const AboutPage = () => {
    return (
        <>
            <HomeContentLayout>
                <AboutLeftSide/>
                <AboutRightSide/>
            </HomeContentLayout>
            <BrandList/>
        </>
    )
}

export default AboutPage;