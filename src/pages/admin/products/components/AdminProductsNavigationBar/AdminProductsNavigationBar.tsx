import AdminProductsNavigationBarLayout from "./AdminProductsNavigationBarLayout";
import {Select} from "@mantine/core";
import AdminPageChangeElement from "@/pages/admin/components/AdminPageChangeElement/AdminPageChangeElement";
import {AdminProductsState} from "@/types/AdminProductsState";
import {SortEnum} from "@/types/SortEnum";
import {useRouter} from "next/router";
import {sidebarItemListText} from "@/common-components/SidebarItemList/sidebar-Item-list-text";
import {handleAdminProductsChange} from "@/pages/admin/products/helpers";
import AdminProductNavbarSelectors
    from "@/pages/admin/products/components/AdminProductNavbarSelectors/AdminProductNavbarSelectors";

type AdminProductsNavigationBarProps = {
    state: AdminProductsState,
}

const AdminProductsNavigationBar = (props: AdminProductsNavigationBarProps) => {
    const {state} = props;
    const {type, sortType} = state;
    const linkParams = `&type=${type}&sortType=${sortType}`;

    return (
        <AdminProductsNavigationBarLayout>
            <AdminProductNavbarSelectors {...props}/>
            <AdminPageChangeElement
                linkParams={linkParams}
                onePageItems={16}
                link={"/admin/products"}
                {...props}
            />
        </AdminProductsNavigationBarLayout>
    )
}

export default AdminProductsNavigationBar;