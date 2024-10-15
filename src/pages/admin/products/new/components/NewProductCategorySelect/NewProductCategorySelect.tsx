import NewProductCategorySelectLayout from "./NewProductCategorySelectLayout";
import NewProductCategorySelectButtons
    from "@/pages/admin/products/new/components/NewProductCategorySelectButtons/NewProductCategorySelectButtons";
import {Checkbox, ScrollArea} from "@mantine/core";
import {Dispatch, SetStateAction, useEffect, useRef, useState} from "react";
import {useViewportSize} from "@mantine/hooks";
import NewProductCategoryList
    from "@/pages/admin/products/new/components/NewProductCategoryList/NewProductCategoryList";
import {getCommentCheckboxStyles} from "@/pages/admin/comments/components/comment-checkbox-styles";
import {getCategoryCheckboxMap, getSelectOptions, toggleCategorySelection} from "@/pages/admin/products/new/helpers";
import NewProductAllCategorySelect
    from "@/pages/admin/products/new/components/NewProductAllCategorySelect/NewProductAllCategorySelect";
import {CategoryCheckboxMap} from "@/types/CategoryCheckboxMap";

type NewProductCategorySelectProps = {
    selectedCategories: CategoryCheckboxMap,
    setSelectedCategories: Dispatch<SetStateAction<CategoryCheckboxMap | null>>,
    selectOptions: string[]
}

const NewProductCategorySelect = (props: NewProductCategorySelectProps) => {

    return (
        <NewProductCategorySelectLayout>
            <NewProductAllCategorySelect {...props}/>
            <NewProductCategoryList {...props}/>
            <NewProductCategorySelectButtons {...props}/>
        </NewProductCategorySelectLayout>
    )
}

export default NewProductCategorySelect;