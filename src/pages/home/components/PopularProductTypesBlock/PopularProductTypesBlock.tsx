import PopularProductTypesBlockLayout from "./PopularProductTypesBlockLayout";
import {popularProductTypes} from "@/pages/home/components/PopularProductTypesBlock/popular-product-types";
import PopularProductTypeItem
    from "@/pages/home/components/PopularProductTypesBlock/components/PopularProductTypeItem/PopularProductTypeItem";

const PopularProductTypesBlock = () => {

    return (
        <PopularProductTypesBlockLayout>
            <h2 className={"text-2xl text-primary pb-3"}>Популярні категорії товарів</h2>
            {popularProductTypes.map((item, index) => (
                <PopularProductTypeItem item={item} key={index}/>
            ))}
        </PopularProductTypesBlockLayout>
    )
}

export default PopularProductTypesBlock;