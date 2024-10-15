import NewProductRightCategorySideLayout from "./NewProductRightCategorySideLayout";
import {Select} from "@mantine/core";
import {selectCategory, toggleCategorySelection} from "@/pages/admin/products/new/helpers";
import {Dispatch, SetStateAction} from "react";
import {CategoryCheckboxMap} from "@/types/CategoryCheckboxMap";
import {handleCategorySelect} from "@/pages/admin/products/new/handlers";
import {getCommentCheckboxStyles} from "@/pages/admin/comments/components/comment-checkbox-styles";
import {useViewportSize} from "@mantine/hooks";

type NewProductRightCategorySideProps = {
    mapKey: string,
    setSelectedCategories: Dispatch<SetStateAction<CategoryCheckboxMap | null>>,
    selectOptions: string[],
}

const NewProductRightCategorySide = (props: NewProductRightCategorySideProps) => {
    const {mapKey, setSelectedCategories, selectOptions} = props;
    const {width} = useViewportSize();
    const isMobile = width < 960;
    const option = {color: "rgb(82, 82, 82)"}

    return (
        <NewProductRightCategorySideLayout>
            <Select
                styles={isMobile ?
                    {input: {width: width - 48,}, option}
                    : {option}
                }
                comboboxProps={{withinPortal: false}}
                placeholder="Виберіть категорію"
                data={selectOptions}
                defaultValue={selectOptions[0]}
                onChange={(value) => {
                    handleCategorySelect(value, mapKey, setSelectedCategories)
                }}
            />
        </NewProductRightCategorySideLayout>
    )
}

export default NewProductRightCategorySide;