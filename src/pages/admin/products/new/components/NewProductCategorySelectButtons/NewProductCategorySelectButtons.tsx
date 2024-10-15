import NewProductCategorySelectButtonsLayout from "./NewProductCategorySelectButtonsLayout";
import NewProductCategorySelectCancelButton
    from "@/pages/admin/products/new/components/NewProductCategorySelectCancelButton";
import NewProductCategorySelectSubmitButton
    from "@/pages/admin/products/new/components/NewProductCategorySelectSubmitButton/NewProductCategorySelectSubmitButton";
import {Dispatch, SetStateAction} from "react";
import {CategoryCheckboxMap} from "@/types/CategoryCheckboxMap";

type NewProductCategorySelectButtonsProps = {
    setSelectedCategories: Dispatch<SetStateAction<CategoryCheckboxMap | null>>,
}

const NewProductCategorySelectButtons = (
    props: NewProductCategorySelectButtonsProps
) => {
    return (
        <NewProductCategorySelectButtonsLayout>
            <NewProductCategorySelectSubmitButton/>
            <NewProductCategorySelectCancelButton {...props}/>
        </NewProductCategorySelectButtonsLayout>
    )
}

export default NewProductCategorySelectButtons;