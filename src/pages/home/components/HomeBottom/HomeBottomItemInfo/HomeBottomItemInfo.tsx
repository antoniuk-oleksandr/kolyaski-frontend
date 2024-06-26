import HomeBottomItemInfoLayout from "./HomeBottomItemInfoLayout";
import {useState} from "react";

type HomeBottomItemInfo = {
    title: string,
    link: string,
    number: number,
}

const HomeBottomItemInfo = (props: HomeBottomItemInfo) => {
    const {title, number} = props;

    return (
        <HomeBottomItemInfoLayout {...props}>
            <p>{title}</p>
            <p>{number}</p>
        </HomeBottomItemInfoLayout>
    )
}

export default HomeBottomItemInfo;