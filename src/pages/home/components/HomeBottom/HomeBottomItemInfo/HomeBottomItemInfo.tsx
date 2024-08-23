import HomeBottomItemInfoLayout from "./HomeBottomItemInfoLayout";
import {useState} from "react";

type HomeBottomItemInfo = {
    title: string,
    link: string,
}

const HomeBottomItemInfo = (props: HomeBottomItemInfo) => {
    const {title} = props;

    return (
        <HomeBottomItemInfoLayout {...props}>
            <p>{title}</p>
        </HomeBottomItemInfoLayout>
    )
}

export default HomeBottomItemInfo;