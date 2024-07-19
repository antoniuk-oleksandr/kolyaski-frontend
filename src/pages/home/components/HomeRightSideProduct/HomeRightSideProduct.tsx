import HomeRightSideProductLayout from "./HomeRightSideProductLayout";
import {HomeDataElement} from "@/types/HomeDataElement";
import HomeRightSideProductImage from "@/pages/home/components/HomeRightSideProductImage/HomeRightSideProductImage";
import {NumberFormatter} from "@mantine/core";

type HomeRightSideProductProps = HomeDataElement;

const HomeRightSideProduct = (props: HomeRightSideProductProps) => {
    const {name, price} = props;

    return (
        <HomeRightSideProductLayout>
            <HomeRightSideProductImage {...props}/>
            <p className={"line-clamp-2 h-10"}>{name}</p>
            <NumberFormatter
                value={price}
                suffix={" грн."}
                className={"text-primary text-base phone:text-lg font-medium"}
            />
        </HomeRightSideProductLayout>
    )
}

export default HomeRightSideProduct;