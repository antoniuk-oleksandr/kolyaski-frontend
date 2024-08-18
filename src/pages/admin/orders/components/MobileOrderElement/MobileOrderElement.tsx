import MobileOrderElementLayout from "./MobileOrderElementLayout";
import {ReactNode} from "react";

type MobileOrderElementProps = {
    text: string,
    value?: string | number | undefined | null,
    customValue?: ReactNode,
}

const MobileOrderElement = (props: MobileOrderElementProps) => {
    const {text, value, customValue} = props;

    if(!value && !customValue) return null;
    return (
        <MobileOrderElementLayout>
            <span className={"font-medium"}>{text}</span>
            {customValue ? customValue : <p className={"line-clamp-2 text-justify"}>{value}</p>}
        </MobileOrderElementLayout>
    )
}

export default MobileOrderElement;