type HomeCarouselSlideInfoSecondLineProps = {
    secondLineText: string,
}

const HomeCarouselSlideInfoSecondLine = (props: HomeCarouselSlideInfoSecondLineProps) => {
    const { secondLineText } = props;

    return (
        <p
            className={"font-medium text-lg text-primary mb-5"}
        >{secondLineText}</p>
    )
}

export default HomeCarouselSlideInfoSecondLine;