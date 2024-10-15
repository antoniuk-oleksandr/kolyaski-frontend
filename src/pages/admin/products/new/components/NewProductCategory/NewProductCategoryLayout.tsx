import {LayoutProps} from "@/types/LayoutProps";
import {Dispatch, SetStateAction} from "react";
import {CategoryCheckboxMap} from "@/types/CategoryCheckboxMap";
import { handleCategoryClick } from "../../handlers";
import {CategoryCheckboxMapValue} from "@/types/CategoryCheckboxMapValue";

type NewProductCategoryLayoutProps = LayoutProps & {
    mapValue: CategoryCheckboxMapValue,
    mapKey: string,
    setSelectedCategories: Dispatch<SetStateAction<CategoryCheckboxMap | null>>,
    isLast: boolean,
}

const NewProductCategoryLayout = (props: NewProductCategoryLayoutProps) => {
    const {children, mapKey, mapValue, setSelectedCategories, isLast} = props;

    return (
        <div
            className={`phone:flex-col phone:items-start gap-y-3 flex items-center justify-between border-t border-neutral-200 px-6 hover:shadow cursor-pointer py-2.5 
            ${mapValue.isSelected ? 'bg-primary text-white border-primaryHover' : 'hover:bg-comments'}
            ${isLast && 'border-b'} 
            `}
            onClick={(e) => handleCategoryClick(e, mapKey, setSelectedCategories)}
        >
            {children}
        </div>
    )
}

export default NewProductCategoryLayout;