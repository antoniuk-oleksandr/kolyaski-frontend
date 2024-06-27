import PageContentLayout from "@/common-components/PageContentLayout";
import AboutLeftSide from "@/pages/about/components/AboutLeftSide/AboutLeftSide";
import BrandList from "@/pages/home/components/BrandList/BrandList";
import AboutRightSide from "@/pages/about/components/AboutRightSide/AboutRightSide";

const AboutPage = () => {
    return (
        <>
            <PageContentLayout>
                <AboutLeftSide/>
                <AboutRightSide/>
            </PageContentLayout>
            <BrandList/>
        </>
    )
}

export default AboutPage;