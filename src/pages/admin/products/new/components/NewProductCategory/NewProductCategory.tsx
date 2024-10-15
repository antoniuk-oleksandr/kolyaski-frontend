import NewProductCategoryLayout from "./NewProductCategoryLayout";
import {CategoryCheckboxMap} from "@/types/CategoryCheckboxMap";
import {Dispatch, SetStateAction} from "react";
import NewProductLeftCategorySide
    from "@/pages/admin/products/new/components/NewProductLeftCategorySide/NewProductLeftCategorySide";
import NewProductRightCategorySide
    from "@/pages/admin/products/new/components/NewProductRightCategorySide/NewProductRightCategorySide";
import {CategoryCheckboxMapValue} from "@/types/CategoryCheckboxMapValue";

type NewProductCategoryProps = {
    mapValue: CategoryCheckboxMapValue,
    mapKey: string,
    setSelectedCategories: Dispatch<SetStateAction<CategoryCheckboxMap | null>>,
    isLast: boolean,
    selectOptions: string[]
}

const NewProductCategory = (props: NewProductCategoryProps) => {
    return (
        <NewProductCategoryLayout {...props}>
            <NewProductLeftCategorySide {...props}/>
            <NewProductRightCategorySide {...props}/>
        </NewProductCategoryLayout>
    )
}

export default NewProductCategory;