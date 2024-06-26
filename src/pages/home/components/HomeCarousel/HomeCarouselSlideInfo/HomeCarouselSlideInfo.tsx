import HomeCarouselSlideInfoLayout from "./HomeCarouselSlideInfoLayout";
import HomeCarouselSlideInfoContent
    from "@/pages/home/components/HomeCarousel/HomeCarouselSlideInfoContent/HomeCarouselSlideInfoContent";

type HomeCarouselSlideInfoProps = {
    firstLineText: string,
    secondLineText: string,
    thirdLineText: string,
    link: string,
    isSelected: boolean,
}

const HomeCarouselSlideInfo = (props: HomeCarouselSlideInfoProps) => {
    return (
        <HomeCarouselSlideInfoLayout>
            <HomeCarouselSlideInfoContent {...props}/>
        </HomeCarouselSlideInfoLayout>
    )
}

export default HomeCarouselSlideInfo;