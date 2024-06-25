import ThirdBottomHeaderColumnItemLayout from "./ThirdBottomHeaderColumnItemLayout";
import {ReactNode, useState} from "react";

type ThirdBottomHeaderColumnItemProps = {
    text: string,
    icon: ReactNode,
    link: string,
}

const ThirdBottomHeaderColumnItem = (props: ThirdBottomHeaderColumnItemProps) => {
    const {icon, text} = props;
    const [isHovered, setIsHovered] = useState(false);

    return (
        <ThirdBottomHeaderColumnItemLayout
            {...props}
            setIsHovered={setIsHovered}
            isHovered={isHovered}
        >
            {icon}
            <p className={"text-sm phone:hidden"}>{text}</p>
        </ThirdBottomHeaderColumnItemLayout>
    )
}

export default ThirdBottomHeaderColumnItem;