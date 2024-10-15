import NewProductAllCategorySelectLayout from "./NewProductAllCategorySelectLayout";
import {CategoryCheckboxMap} from "@/types/CategoryCheckboxMap";
import {Dispatch, SetStateAction} from "react";
import NewProductAllCategoryCheckbox
    from "@/pages/admin/products/new/components/NewProductAllCategoryCheckbox/NewProductAllCategoryCheckbox";

type NewProductAllCategorySelectProps = {
    selectedCategories: CategoryCheckboxMap,
    setSelectedCategories: Dispatch<SetStateAction<CategoryCheckboxMap | null>>,
}

const NewProductAllCategorySelect = (props: NewProductAllCategorySelectProps) => {
    const {selectedCategories} = props;
    const isSelected = Object.values(selectedCategories).every(value => value.isSelected);

    return (
        <NewProductAllCategorySelectLayout
            {...props}
            isSelected={isSelected}
        >
            <NewProductAllCategoryCheckbox isSelected={isSelected}/>
            <p>Вибрати всі або жодну категорію.</p>
        </NewProductAllCategorySelectLayout>
    )
}

export default NewProductAllCategorySelect;