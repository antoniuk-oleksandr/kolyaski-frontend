import NewProductBlockLayout from "./NewProductBlockLayout";
import EditProductDescriptionElement
    from "@/pages/admin/products/[id]/components/EditProductDescriptionElement/EditProductDescriptionElement";
import EditProductImagesBlock
    from "@/pages/admin/products/[id]/components/EditProductImagesBlock/EditProductImagesBlock";
import EditProductGeneralData
    from "@/pages/admin/products/[id]/components/EditProductGeneralData/EditProductGeneralData";
import NewProductButtons from "@/pages/admin/products/new/components/NewProductButtons/NewProductButtons";
import {useState} from "react";

const NewProductBlock = () => {
    const [sending, setSending] = useState(false);


    return (
        <NewProductBlockLayout setSending={setSending}>
            <h1 className="text-2xl font-bold mb-3">Додати новий товар</h1>
            <EditProductGeneralData type={""} subType={""}/>
            <EditProductDescriptionElement description={""}/>
            <EditProductImagesBlock images={[]}/>
            <NewProductButtons sending={sending}/>
        </NewProductBlockLayout>
    )
}

export default NewProductBlock;