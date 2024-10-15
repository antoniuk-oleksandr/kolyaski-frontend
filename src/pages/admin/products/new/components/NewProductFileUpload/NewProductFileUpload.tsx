import NewProductFileUploadLayout from "./NewProductFileUploadLayout";
import NewProductFileDropzone from "@/pages/admin/products/new/components/NewProductFileDropzone";
import NewProductModalButtons
    from "@/pages/admin/products/new/components/NewProductModalButtons/NewProductModalButtons";
import {Dispatch, SetStateAction} from "react";
import {CategoryCheckboxMap} from "@/types/CategoryCheckboxMap";

type NewProductFileUploadProps = {
    setSelectedCategories: Dispatch<SetStateAction<CategoryCheckboxMap | null>>,
    selectOptions: string[],
}

const NewProductFileUpload = (props: NewProductFileUploadProps) => {
    return (
        <NewProductFileUploadLayout>
            <NewProductFileDropzone {...props}/>
            <NewProductModalButtons/>
        </NewProductFileUploadLayout>
    )
}

export default NewProductFileUpload;