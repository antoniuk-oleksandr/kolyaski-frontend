import MobileOrderElementLayout from "./MobileOrderElementLayout";

type MobileOrderElementProps = {
    text: string,
    value: string | number,
}

const MobileOrderElement = (props: MobileOrderElementProps) => {
    const {text, value} = props;

    return (
        <MobileOrderElementLayout>
            <span className={"font-medium"}>{text}</span>
            <span>{value}</span>
        </MobileOrderElementLayout>
    )
}

export default MobileOrderElement;