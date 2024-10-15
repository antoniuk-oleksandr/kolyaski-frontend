import {LayoutProps} from "@/types/LayoutProps";
import {selectAllCategories} from "@/pages/admin/products/new/helpers";
import {Dispatch, SetStateAction} from "react";
import {CategoryCheckboxMap} from "@/types/CategoryCheckboxMap";

type NewProductAllCategorySelectLayoutProps = LayoutProps & {
    setSelectedCategories: Dispatch<SetStateAction<CategoryCheckboxMap | null>>,
    isSelected: boolean,
}

const NewProductAllCategorySelectLayout = (
    props: NewProductAllCategorySelectLayoutProps
) => {
    const {children, setSelectedCategories, isSelected} = props;

    return (
        <div
            onClick={() => selectAllCategories(setSelectedCategories, !isSelected)}
            className={"flex w-full bg-gray-200  items-center gap-x-3 h-14 self-start px-6"}>
            {children}
        </div>
    )
}

export default NewProductAllCategorySelectLayout;