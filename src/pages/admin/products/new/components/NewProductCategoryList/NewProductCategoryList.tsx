import NewProductCategoryListLayout from "./NewProductCategoryListLayout";
import NewProductCategory from "@/pages/admin/products/new/components/NewProductCategory/NewProductCategory";
import {Dispatch, SetStateAction} from "react";
import {CategoryCheckboxMap} from "@/types/CategoryCheckboxMap";

type NewProductCategoryListProps = {
    selectedCategories: CategoryCheckboxMap,
    setSelectedCategories: Dispatch<SetStateAction<CategoryCheckboxMap | null>>,
    selectOptions: string[],
}

const NewProductCategoryList = (props: NewProductCategoryListProps) => {
    const {selectedCategories} = props;

    return (
        <NewProductCategoryListLayout>
            {Object.entries(selectedCategories).map(([mapKey, value], index) => (
                <NewProductCategory
                    {...props}
                    mapKey={mapKey}
                    mapValue={value}
                    key={index}
                    isLast={index === Object.keys(selectedCategories).length - 1}
                />
            ))}
        </NewProductCategoryListLayout>
    )
}

export default NewProductCategoryList;