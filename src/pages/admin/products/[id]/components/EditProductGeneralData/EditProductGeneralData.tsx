import MessageFormInput from "@/pages/contacts/components/MessageFormInput/MessageFormInput";
import EditProductGeneralDataLayout from "./EditProductGeneralDataLayout";
import {Select} from "@mantine/core";
import {ProductData} from "@/types/ProductData";
import {sidebarItemListText} from "@/common-components/SidebarItemList/sidebar-Item-list-text";
import {useFormContext} from "react-hook-form";
import MessageFormError from "@/pages/contacts/components/MessageFormError";
import EditProductSelect from "@/pages/admin/products/[id]/components/EditProductSelect/EditProductSelect";

type EditProductGeneralDataProps = {
    type?: string | undefined,
    subType?: string | undefined | null;
}

const EditProductGeneralData = (props: EditProductGeneralDataProps) => {
    const {type, subType} = props;
    const selectTypes = sidebarItemListText.map((item) => item.text);
    const selectSubTypes = ["Коляски 2 в 1", "Коляски 3 в 1", "Прогулянкові коляски", "Коляски для двійні", "Матраси", "Постіль", "Жоден"];

    return (
        <EditProductGeneralDataLayout>
            <h2 className="text-xl font-semibold col-span-2 mb-1.5">Основні дані</h2>
            <MessageFormInput id="name" label="Назва"/>
            <MessageFormInput type={"number"} id="price" label="Ціна"/>
            <EditProductSelect
                id={"type"}
                label={"Категорія"}
                defaultValue={type as string}
                data={selectTypes}
            />
            <EditProductSelect
                id={"subType"}
                label={"Підкатегорія"}
                defaultValue={!subType ? "Жоден" : subType as string}
                data={selectSubTypes}
            />
            <MessageFormInput type={"number"} id="quantity" label="Кількість"/>
        </EditProductGeneralDataLayout>
    )
}

export default EditProductGeneralData;