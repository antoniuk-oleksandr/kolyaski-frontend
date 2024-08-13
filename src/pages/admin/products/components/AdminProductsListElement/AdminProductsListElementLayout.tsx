import {LayoutProps} from "@/types/LayoutProps";
import {useRouter} from "next/router";
import {AdminProductsState} from "@/types/AdminProductsState";
import {makeProductsLink} from "@/pages/admin/products/helpers";

type ProductsListElementLayoutProps = LayoutProps & {
    last: boolean,
    id: number,
    adminProductsState: AdminProductsState,
}

const AdminProductsListElementLayout = (props: ProductsListElementLayoutProps) => {
    const {children, last, id, adminProductsState} = props;
    const router = useRouter();

    return (
        <div
            onClick={() => router.push(makeProductsLink(adminProductsState, id))}
            className={`hover:bg-comments duration-200 ease-out cursor-pointer grid grid-cols-adminProductsColumns items-center gap-x-3 text-sm px-6 py-1.5
            ${last ? '' : 'border-b-neutral-200 border-b'}`}
        >
            {children}
        </div>
    )
}

export default AdminProductsListElementLayout;