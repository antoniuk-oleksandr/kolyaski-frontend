type SideCardFirstLineProps = {
    firstLineText: string,
    firstLineTextStyle: string,
}

const SideCardFirstLine = (props: SideCardFirstLineProps) => {
    const { firstLineText, firstLineTextStyle } = props

    return (
        <h2 className={firstLineTextStyle}>{firstLineText}</h2>
    )
}

export default SideCardFirstLine;