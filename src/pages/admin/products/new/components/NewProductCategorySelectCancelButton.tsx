import {Dispatch, SetStateAction} from "react";
import {CategoryCheckboxMap} from "@/types/CategoryCheckboxMap";
import {clearNewProductModal} from "@/pages/admin/products/new/helpers";
import {useFormContext} from "react-hook-form";

type NewProductCategorySelectCancelButton = {
    setSelectedCategories: Dispatch<SetStateAction<CategoryCheckboxMap | null>>,
}

const NewProductCategorySelectCancelButton = (
    props: NewProductCategorySelectCancelButton
) => {
    const {setSelectedCategories} = props;
    const {reset} = useFormContext();

    return (
        <button
            onClick={() =>
                clearNewProductModal(setSelectedCategories, reset)
        }
            type={"button"}
            className={"w-36 h-11  bg-neutral-200 outline-none rounded-md duration-200 ease-out active:scale-95 hover:brightness-105"}
        >Відмінити
        </button>
    )
}

export default NewProductCategorySelectCancelButton;