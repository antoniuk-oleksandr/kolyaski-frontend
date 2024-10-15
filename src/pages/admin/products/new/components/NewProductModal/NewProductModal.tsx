import NewProductModalLayout from "./NewProductModalLayout";
import {Dispatch, MutableRefObject, SetStateAction, useState} from "react";
import {AdminModalSignalType} from "@/types/AdminModalSignalType";
import NewProductFileUpload from "@/pages/admin/products/new/components/NewProductFileUpload/NewProductFileUpload";
import NewProductCategorySelect
    from "@/pages/admin/products/new/components/NewProductCategorySelect/NewProductCategorySelect";
import {CategoryCheckboxMap} from "@/types/CategoryCheckboxMap";
import {getCategoryCheckboxMap, getSelectOptions} from "@/pages/admin/products/new/helpers";

type NewProductModalProps = {
    prevModalValue: MutableRefObject<AdminModalSignalType>,
}

const NewProductModal = (props: NewProductModalProps) => {
    const selectOptions = getSelectOptions();
    const [selectedCategories, setSelectedCategories] = useState<CategoryCheckboxMap | null>(null);

    return (
        <NewProductModalLayout
            setSelectedCategories={setSelectedCategories}
            selectedCategories={selectedCategories}
            {...props}
        >
            {selectedCategories
                ? <NewProductCategorySelect
                    selectOptions={selectOptions}
                    setSelectedCategories={setSelectedCategories}
                    selectedCategories={selectedCategories}
                />
                : <NewProductFileUpload
                    selectOptions={selectOptions}
                    setSelectedCategories={setSelectedCategories}
                    {...props}
                />
            }
        </NewProductModalLayout>
    )
}

export default NewProductModal;