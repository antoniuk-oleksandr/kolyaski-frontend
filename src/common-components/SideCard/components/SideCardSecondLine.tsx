type SideCardSecondLineProps = {
    secondLineText: string,
    secondLineTextStyle: string,
}

const SideCardSecondLine = (props: SideCardSecondLineProps) => {
    const { secondLineText, secondLineTextStyle } = props

    return (
        <h3 className={secondLineTextStyle}>{secondLineText}</h3>
    )
}

export default SideCardSecondLine;