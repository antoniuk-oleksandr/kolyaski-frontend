import HomeCarouselSlideLayout from "./HomeCarouselSlideLayout";
import Image from "next/image";
import HomeCarouselSlideInfo from "@/pages/home/components/HomeCarousel/HomeCarouselSlideInfo/HomeCarouselSlideInfo";

type HomeCarouselSlideProps = {
    firstLineText: string,
    secondLineText: string,
    thirdLineText: string,
    link: string,
    imageSrc: string,
    isSelected: boolean,
}

const HomeCarouselSlide = (props: HomeCarouselSlideProps) => {
    const {imageSrc} = props;

    return (
        <HomeCarouselSlideLayout>
            <HomeCarouselSlideInfo {...props}/>
            <Image
                draggable={false}
                className={"size-full object-cover object-center"}
                priority
                src={imageSrc}
                alt={'img'}
                width={1920}
                height={1080}
            />
        </HomeCarouselSlideLayout>
    )
}

export default HomeCarouselSlide;