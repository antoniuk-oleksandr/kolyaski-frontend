type SideCardThirdLineProps = {
    thirdLineText?: string,
    thirdLineTextStyle?: string,
}

const SideCardThirdLine = (props: SideCardThirdLineProps) => {
    const {thirdLineText, thirdLineTextStyle} = props

    if (thirdLineText === undefined) return null;
    return (
        <p className={thirdLineTextStyle}>{thirdLineText}</p>
    )
}

export default SideCardThirdLine;