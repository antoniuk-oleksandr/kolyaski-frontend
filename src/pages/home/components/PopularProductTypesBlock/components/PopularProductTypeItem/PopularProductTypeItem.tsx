import PopularProductTypeItemLayout from "./PopularProductTypeItemLayout";
import {PopularProductType} from "@/types/PopularProductType";
import PopularProductTypeImage
    from "@/pages/home/components/PopularProductTypesBlock/components/PopularProductTypeImage/PopularProductTypeImage";

type PopularProductTypeItemProps = {
    item: PopularProductType,
}

const PopularProductTypeItem = (props: PopularProductTypeItemProps) => {
    const {item} = props;
    const {link, name, image} = item;

    return (
        <PopularProductTypeItemLayout link={link}>
            <PopularProductTypeImage src={image}/>
            <p className={"hover:text-primary cursor-pointer ease-out"}>{name}</p>
        </PopularProductTypeItemLayout>
    )
}

export default PopularProductTypeItem;