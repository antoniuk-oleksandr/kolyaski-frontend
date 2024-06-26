import HomeBottomItemLayout from "./HomeBottomItemLayout";
import Image from "next/image";
import HomeBottomItemInfo from "@/pages/home/components/HomeBottom/HomeBottomItemInfo/HomeBottomItemInfo";

type HomeBottomItemProps = {
    className?: string,
    src: string,
    title: string,
    link: string,
    number: number,
}

const HomeBottomItem = (props: HomeBottomItemProps) => {
    const {src} = props;

    return (
        <HomeBottomItemLayout {...props}>
            <Image
                className={"object-center object-cover w-full h-fit"}
                width={1000}
                height={1000}
                src={src}
                alt={'home bottom icon'}
            />
            <HomeBottomItemInfo {...props}/>
        </HomeBottomItemLayout>
    )
}

export default HomeBottomItem;