import AddOrderProductItemLayout from "./AddOrderProductItemLayout";
import {ProductData} from "@/types/ProductData";
import AddOrderProductItemImage
    from "@/pages/admin/orders/[id]/components/AddOrderProductModal/components/AddOrderProductItemImage/AddOrderProductItemImage";

type AddOrderProductItemProps = {
    item: ProductData,
}

const AddOrderProductItem = (props: AddOrderProductItemProps) => {
    const {item} = props;

    return (
        <AddOrderProductItemLayout {...props}>
            <AddOrderProductItemImage src={item.images[0]}/>
            <h2 className={"line-clamp-2"}>{item.name}</h2>
        </AddOrderProductItemLayout>
    )
}

export default AddOrderProductItem;