import AdminProductsListElementLayout from "./AdminProductsListElementLayout";
import {ProductData} from "@/types/ProductData";
import AddOrderProductItemImage
    from "@/pages/admin/orders/[id]/components/AddOrderProductModal/components/AddOrderProductItemImage/AddOrderProductItemImage";
import {Badge, NumberFormatter} from "@mantine/core";
import {AdminProductsState} from "@/types/AdminProductsState";

type ProductsListElementProps = {
    item: ProductData,
    last: boolean,
    adminProductsState: AdminProductsState,
}

const AdminProductsListElement = (props: ProductsListElementProps) => {
    const {item} = props;
    const {name, images, id, price, type, subType, quantity} = item;

    return (
        <AdminProductsListElementLayout {...item} {...props}>
            <span>{id}</span>
            <AddOrderProductItemImage size={"size-16"} src={images[0]}/>
            <span className={"line-clamp-2 font-semibold"}>{name}</span>
            <span>{quantity}</span>
            <div className={"flex items-center gap-x-3"}>
                <Badge color="gray">{type}</Badge>
                <Badge color="gray">{subType}</Badge>
            </div>
            <NumberFormatter value={price} thousandSeparator={","} suffix={" грн."}/>
        </AdminProductsListElementLayout>
    )
}

export default AdminProductsListElement;