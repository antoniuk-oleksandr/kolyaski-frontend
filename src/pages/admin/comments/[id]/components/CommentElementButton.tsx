import {Tooltip} from "@mantine/core";
import ComponentElementIcon from "@/pages/admin/comments/components/ComponentElementIcon";
import {ReactNode} from "react";

type CommentElementButtonProps = {
    label: string,
    action: () => void,
    icon: ReactNode,
    styles?: string,
    isDisabled?: boolean,
}

const CommentElementButton = (props: CommentElementButtonProps) => {
    const {label, styles} = props;

    return (
        <Tooltip position={"bottom"} label={label}>
            <div
                className={`cursor-pointer py-0.5 grid place-items-center ${styles}`}>
                <ComponentElementIcon {...props}/>
            </div>
        </Tooltip>
    )
}

export default CommentElementButton;