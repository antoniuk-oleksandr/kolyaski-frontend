import NewProductBlockLayout from "./NewProductBlockLayout";
import EditProductDescriptionElement
    from "@/pages/admin/products/[id]/components/EditProductDescriptionElement/EditProductDescriptionElement";
import EditProductImagesBlock
    from "@/pages/admin/products/[id]/components/EditProductImagesBlock/EditProductImagesBlock";
import EditProductGeneralData
    from "@/pages/admin/products/[id]/components/EditProductGeneralData/EditProductGeneralData";
import NewProductButtons from "@/pages/admin/products/new/components/NewProductButtons/NewProductButtons";
import {useRef, useState} from "react";
import {AdminProductsState} from "@/types/AdminProductsState";
import NewProductModal from "@/pages/admin/products/new/components/NewProductModal/NewProductModal";
import {TokenInfo} from "@/types/TokenInfo";
import {AdminModalSignalType} from "@/types/AdminModalSignalType";

type NewProductBlockProps = {
    adminProductsState: AdminProductsState,
}

const NewProductBlock = (props: NewProductBlockProps) => {
    const [sending, setSending] = useState(false);
    const prevModalValue = useRef<AdminModalSignalType>({open: 0, close: 0});

    return (
        <>
            <NewProductBlockLayout {...props} setSending={setSending}>
                <h1 className="text-2xl font-bold mb-3">Додати новий товар</h1>
                <EditProductGeneralData type={""} subType={""}/>
                <EditProductDescriptionElement description={""}/>
                <EditProductImagesBlock images={[]}/>
                <NewProductButtons {...props} sending={sending}/>
            </NewProductBlockLayout>
            <NewProductModal
                sending={sending}
                setSending={setSending}
                prevModalValue={prevModalValue}
            />
        </>
    )
}

export default NewProductBlock;