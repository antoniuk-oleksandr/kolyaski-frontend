// AdminMobileProductListElement.tsx

import AdminMobileProductListElementLayout from "./AdminMobileProductListElementLayout";
import { ProductData } from "@/types/ProductData";
import { useRouter } from 'next/router';
import Button from "@/common-components/Button";
import { NumberFormatter } from "@mantine/core";
import AddOrderProductItemImage
    from "@/pages/admin/orders/[id]/components/AddOrderProductModal/components/AddOrderProductItemImage/AddOrderProductItemImage";

type AdminMobileProductListElementProps = {
    item: ProductData,
};

const AdminMobileProductListElement = (props: AdminMobileProductListElementProps) => {
    const { item } = props;
    const { name, images, id, price, type, subType } = item;
    const router = useRouter();

    const handleEditClick = () => {
        router.push(`/admin/products/${id}`);
    };

    return (
        <AdminMobileProductListElementLayout>
            <div className="p-4 border-b border-gray-200">
                <div className="flex items-center">
                    <AddOrderProductItemImage size="size-16" src={images[0]} />

                    <div className="flex-1">
                        <div className="text-sm text-gray-700">ID: {id}</div>
                        <div className="text-sm text-gray-700">Name: {name}</div>
                        <div className="text-sm text-gray-700">Type: {type}</div>
                        <div className="text-sm text-gray-700">SubType: {subType}</div>
                        <div className="text-sm text-gray-700">
                            Price: <NumberFormatter value={price} thousandSeparator={","} suffix={" грн."} />
                        </div>
                    </div>
                    <Button onClick={handleEditClick} className="ml-4">
                        Edit
                    </Button>
                </div>
            </div>
        </AdminMobileProductListElementLayout>
    );
}

export default AdminMobileProductListElement;
