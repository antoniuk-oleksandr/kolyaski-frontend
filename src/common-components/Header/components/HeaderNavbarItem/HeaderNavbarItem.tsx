import HeaderNavbarItemLayout from "./HeaderNavbarItemLayout";

type HeaderNavbarItemProps = {
    text: string,
    isSelected: boolean,
    link: string,
    clickAction?: () => void,
    className?: string,
}

const HeaderNavbarItem = (props: HeaderNavbarItemProps) => {
    const {text} = props;

    return (
        <HeaderNavbarItemLayout {...props}>
            <p>{text}</p>
        </HeaderNavbarItemLayout>
    )
}

export default HeaderNavbarItem;