import AdminMobileProductListElementLayout from "./AdminMobileProductListElementLayout";
import {ProductData} from "@/types/ProductData";
import {useRouter} from 'next/router';
import Button from "@/common-components/Button";
import {NumberFormatter} from "@mantine/core";
import AddOrderProductItemImage
    from "@/pages/admin/orders/[id]/components/AddOrderProductModal/components/AddOrderProductItemImage/AddOrderProductItemImage";
import Image from "next/image";
import MobileOrderElement from "@/pages/admin/orders/components/MobileOrderElement/MobileOrderElement";
import MobileAdminButton from "@/pages/admin/orders/components/MobileOrderButton/MobileOrderButton";
import {makeProductsLink} from "@/pages/admin/products/helpers";
import {AdminProductsState} from "@/types/AdminProductsState";

type AdminMobileProductListElementProps = {
    item: ProductData,
    adminProductsState: AdminProductsState,
};

const AdminMobileProductListElement = (props: AdminMobileProductListElementProps) => {
    const {item, adminProductsState} = props;
    const {name, images, id, price, quantity, type, subType} = item;

    const link = makeProductsLink(adminProductsState, id);

    return (
        <AdminMobileProductListElementLayout>
            <div className={"p-3"}>
                <AddOrderProductItemImage size={"size-52"} src={images[0]}/>
            </div>
            <div className={"w-full flex flex-col"}>
                <MobileOrderElement text={"Назва"} value={name}/>
                <MobileOrderElement text={"Тип"} value={type}/>
                <MobileOrderElement text={"Підтип"} value={subType}/>
                <MobileOrderElement text={"Ціна"} customValue={
                    <NumberFormatter value={price} thousandSeparator={","} suffix={" грн."}/>
                }/>
                <MobileOrderElement text={"ID"} value={id}/>
                <MobileOrderElement text={"Кількість"} value={quantity}/>
            </div>
            <MobileAdminButton link={link} {...item}/>
        </AdminMobileProductListElementLayout>
    );
}

export default AdminMobileProductListElement;
