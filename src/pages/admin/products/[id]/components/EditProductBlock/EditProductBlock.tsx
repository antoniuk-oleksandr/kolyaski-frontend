import EditProductBlockLayout from "./EditProductBlockLayout";
import {AdminProductsState} from "@/types/AdminProductsState";
import EditProductDescriptionElement
    from "@/pages/admin/products/[id]/components/EditProductDescriptionElement/EditProductDescriptionElement";
import EditProductGeneralData from "../EditProductGeneralData/EditProductGeneralData";
import EditProductImagesBlock
    from "@/pages/admin/products/[id]/components/EditProductImagesBlock/EditProductImagesBlock";
import EditProductButtons from "@/pages/admin/products/[id]/components/EditProductButtons/EditProductButtons";
import {useRef, useState} from "react";
import {useSelector} from "react-redux";
import {ReduxState} from "@/types/ReduxState";
import NewProductButtons from "@/pages/admin/products/new/components/NewProductButtons/NewProductButtons";

type EditProductBlockProps = {
    adminProductsState: AdminProductsState;
}

const EditProductBlock = (props: EditProductBlockProps) => {
    const {adminProductsState} = props;
    const {tokenInfo} = useSelector((state: ReduxState) => state.token);
    const [sending, setSending] = useState(false);

    const {productById} = adminProductsState;
    if (!productById) return null;

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const initialProductData = useRef(productById);
    const {id, description, images} = productById;

    return (
        <EditProductBlockLayout
            initialProductData={initialProductData.current}
            setSending={setSending}
            product={productById}
            tokenInfo={tokenInfo}
        >
            <h1 className="text-2xl font-bold mb-3">Редагувати товар №{id}</h1>
            <EditProductGeneralData {...productById}/>
            <EditProductDescriptionElement description={description}/>
            <EditProductImagesBlock images={images}/>
            <EditProductButtons
                tokenInfo={tokenInfo}
                id={id}
                setSending={setSending}
                initialProductData={initialProductData.current}
                sending={sending}
            />
        </EditProductBlockLayout>
    );
}

export default EditProductBlock;
