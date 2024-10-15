import NewProductLeftCategorySideLayout from "./NewProductLeftCategorySideLayout";
import {Checkbox} from "@mantine/core";
import {getCommentCheckboxStyles} from "@/pages/admin/comments/components/comment-checkbox-styles";
import {toggleCategorySelection} from "@/pages/admin/products/new/helpers";
import {Dispatch, SetStateAction} from "react";
import {CategoryCheckboxMap} from "@/types/CategoryCheckboxMap";
import {CategoryCheckboxMapValue} from "@/types/CategoryCheckboxMapValue";

type NewProductLeftCategorySideProps = {
    mapKey: string,
    mapValue: CategoryCheckboxMapValue,
    setSelectedCategories: Dispatch<SetStateAction<CategoryCheckboxMap | null>>,
};

const NewProductLeftCategorySide = (props: NewProductLeftCategorySideProps) => {
    const {mapKey, mapValue, setSelectedCategories} = props;
    const {isSelected} = mapValue;

    return (
        <NewProductLeftCategorySideLayout>
            <Checkbox
                className={`duration-200 ease-out hover:ring-[8px] ring-neutral-200 hover:bg-neutral-200 rounded-full 
                    ${mapValue ? 'hover:bg-opacity-30 ring-opacity-30' : ''}`}
                onChange={() => null}
                variant="outline"
                styles={getCommentCheckboxStyles(isSelected)}
                checked={isSelected}
                onClick={() => toggleCategorySelection(mapKey, setSelectedCategories)}
            />
            <p>{mapKey}</p>
        </NewProductLeftCategorySideLayout>
    )
}

export default NewProductLeftCategorySide;