import AddOrderProductItemListLayout from "./AddOrderProductItemListLayout";
import {ProductData} from "@/types/ProductData";
import AddOrderProductItem
    from "@/pages/admin/orders/[id]/components/AddOrderProductModal/components/AddOrderProductItem/AddOrderProductItem";

type AddOrderProductItemListProps = {
    receivedProducts: ProductData[] | null,
}

const AddOrderProductItemList = (props: AddOrderProductItemListProps) => {
    const {receivedProducts} = props;

    return (
        <AddOrderProductItemListLayout {...props}>
            {receivedProducts && receivedProducts.map((item, index) => (
                <AddOrderProductItem key={index} item={item}/>
            ))}
        </AddOrderProductItemListLayout>
    )
}

export default AddOrderProductItemList;