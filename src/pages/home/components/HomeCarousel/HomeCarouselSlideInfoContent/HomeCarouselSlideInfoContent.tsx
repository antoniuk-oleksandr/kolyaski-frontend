import HomeCarouselSlideInfoContentLayout from "./HomeCarouselSlideInfoContentLayout";
import HomeCarouselSlideInfoFirstLine from "@/pages/home/components/HomeCarousel/HomeCarouselSlideInfoFirstLine";
import HomeCarouselSlideInfoSecondLine from "@/pages/home/components/HomeCarousel/HomeCarouselSlideInfoSecondLine";
import HomeCarouselSlideInfoThirdLine from "@/pages/home/components/HomeCarousel/HomeCarouselSlideInfoThirdLine";
import HomeCarouselSlideInfoBuyButton from "@/pages/home/components/HomeCarousel/HomeCarouselSlideInfoBuyButton";

type HomeCarouselSlideInfoContentProps = {
    firstLineText: string,
    secondLineText: string,
    thirdLineText: string,
    link: string,
    isSelected: boolean,
}

const HomeCarouselSlideInfoContent = (props: HomeCarouselSlideInfoContentProps) => {
    return (
        <HomeCarouselSlideInfoContentLayout {...props}>
            <HomeCarouselSlideInfoFirstLine {...props}/>
            <HomeCarouselSlideInfoSecondLine {...props}/>
            <HomeCarouselSlideInfoThirdLine {...props}/>
            <HomeCarouselSlideInfoBuyButton {...props}/>
        </HomeCarouselSlideInfoContentLayout>
    )
}

export default HomeCarouselSlideInfoContent;