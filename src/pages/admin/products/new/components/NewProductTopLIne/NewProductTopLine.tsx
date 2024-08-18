import NewProductTopLineLayout from "./NewProductTopLineLayout";
import AdminSearchbar from "@/pages/admin/comments/components/CommentsSearchbar/AdminSearchbar";
import {productsSearchSubmitAction} from "@/pages/admin/helpers";
import NewProductFileSelectButton from "@/pages/admin/products/new/components/NewProductFileSelectButton";

type NewProductTopLineProps = {
    page: number,
    value: string,
}

const NewProductTopLine = (props: NewProductTopLineProps) => {
    const {page, value} = props;

    return (
        <NewProductTopLineLayout>
            <AdminSearchbar value={value} page={page} submitAction={productsSearchSubmitAction}/>
            <NewProductFileSelectButton/>
        </NewProductTopLineLayout>
    )
}

export default NewProductTopLine;