import MessageFormInput from "@/pages/contacts/components/MessageFormInput/MessageFormInput";
import EditProductGeneralDataLayout from "./EditProductGeneralDataLayout";
import { Select } from "@mantine/core";
import { ProductData } from "@/types/ProductData";
import { sidebarItemListText } from "@/common-components/SidebarItemList/sidebar-Item-list-text";
import { useFormContext } from "react-hook-form";

type EditProductGeneralDataProps = {
    product: ProductData,
}

const EditProductGeneralData = (props: EditProductGeneralDataProps) => {
    const { product } = props;
    const { type, subType } = product;
    const selectTypes = sidebarItemListText.map((item) => item.text);
    const selectSubTypes = ["Коляски 2 в 1", "Коляски 3 в 1", "Прогулянкові коляски", "Коляски для двійні", "Матраси", "Постіль"];

    const { setValue } = useFormContext();

    return (
        <EditProductGeneralDataLayout>
            <h2 className="text-xl font-semibold col-span-2 mb-1.5">Основні дані</h2>
            <MessageFormInput id="name" label="Назва" />
            <MessageFormInput id="price" label="Ціна" />
            <Select
                onChange={(value) => setValue("type", value)}
                data={selectTypes}
                defaultValue={type}
                className={"mb-3"}
            />
            {subType && <Select
                onChange={(value) => setValue("subType", value)}
                data={selectSubTypes}
                defaultValue={subType}
                className={"mb-3"}
            />}
            <MessageFormInput id="quantity" label="Кількість" />
        </EditProductGeneralDataLayout>
    )
}

export default EditProductGeneralData;