import SideCardLayout from "./SideCardLayout";
import Image from "next/image";
import SideCardFirstLine from "@/common-components/SideCard/components/SideCardFirstLine";
import SideCardSecondLine from "@/common-components/SideCard/components/SideCardSecondLine";
import SideCardThirdLine from "@/common-components/SideCard/components/SideCardThirdLine";
import SideCardBuyButton from "@/common-components/SideCard/components/SideCardBuyButton";

type SideCardProps = {
    firstLineText: string,
    secondLineText: string,
    thirdLineText?: string,
    imageSrc: string,
    firstLineTextStyle: string,
    secondLineTextStyle: string,
    thirdLineTextStyle?: string,
    bgColor: string,
    buyButtonStyles: string,
    link: string,
}

const SideCard = (props: SideCardProps) => {
    const {imageSrc, firstLineText, secondLineText} = props;

    return (
        <SideCardLayout {...props}>
            <Image
                className={"size-full rounded-md object-cover object-center"}
                width={300}
                height={200}
                src={imageSrc}
                alt={'img'}
            />
            <div className={"p-6"}>
                <SideCardFirstLine {...props}/>
                <SideCardSecondLine {...props}/>
                <SideCardThirdLine {...props}/>
                <SideCardBuyButton {...props}/>
            </div>
        </SideCardLayout>
    )
}

export default SideCard;