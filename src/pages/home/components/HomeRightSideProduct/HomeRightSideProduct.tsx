import HomeRightSideProductLayout from "./HomeRightSideProductLayout";
import {RestrictedProduct} from "@/types/RestrictedProduct";
import HomeRightSideProductImage from "@/pages/home/components/HomeRightSideProductImage/HomeRightSideProductImage";
import {NumberFormatter} from "@mantine/core";

type HomeRightSideProductProps = RestrictedProduct;

const HomeRightSideProduct = (props: HomeRightSideProductProps) => {
    const {name, price} = props;

    return (
        <HomeRightSideProductLayout {...props}>
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