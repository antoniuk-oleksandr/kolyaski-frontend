type HomeCarouselSlideInfoThirdLineProps = {
    thirdLineText: string,
}

const HomeCarouselSlideInfoThirdLine = (props: HomeCarouselSlideInfoThirdLineProps) => {
    const { thirdLineText } = props;

    return (
        <p
            className={"text-base text-white absolute bottom-12"}
        >{thirdLineText}</p>
    )
}

export default HomeCarouselSlideInfoThirdLine;