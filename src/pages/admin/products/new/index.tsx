import AdminPageLayout from "@/pages/admin/AdminPageLayout";
import AdminElementLayout from "@/pages/admin/components/AdminElementLayout";
import AdminSearchbar from "@/pages/admin/comments/components/CommentsSearchbar/AdminSearchbar";
import {productsSearchSubmitAction} from "@/pages/admin/helpers";
import NewProductBlock from "@/pages/admin/products/new/components/NewProductBlock/NewProductBlock";

const NewProductPage = () => {
    const value = "";
    const page = 1;

    return (
        <AdminPageLayout>
            <AdminElementLayout>
                <AdminSearchbar value={value} page={page} submitAction={productsSearchSubmitAction}/>
                <NewProductBlock/>
            </AdminElementLayout>
        </AdminPageLayout>
    )
}

export default NewProductPage;