import HomeCarouselSlideLayout from "./HomeCarouselSlideLayout";
import Image from "next/image";

type HomeCarouselSlideProps = {
    firstLineText: string,
    secondLineText: string,
    thirdLineText: string,
    imageSrc: string,
    link: string,
}

const HomeCarouselSlide = (props: HomeCarouselSlideProps) => {
    const {imageSrc, link} = props;

    return (
        <HomeCarouselSlideLayout>
            <Image
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