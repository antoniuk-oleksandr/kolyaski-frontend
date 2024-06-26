type HomeCarouselSlideInfoFirstLineProps = {
    firstLineText: string,
}

const HomeCarouselSlideInfoFirstLine = (props: HomeCarouselSlideInfoFirstLineProps) => {
    const { firstLineText } = props;

    return (
        <h5
            className={"text-white font-semibold uppercase text-4xl mb-3"}
        >{firstLineText}</h5>
    )
}

export default HomeCarouselSlideInfoFirstLine;