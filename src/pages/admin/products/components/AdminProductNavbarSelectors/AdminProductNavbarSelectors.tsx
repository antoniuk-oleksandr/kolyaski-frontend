import AdminProductNavbarSelectorsLayout from "./AdminProductNavbarSelectorsLayout";
import {Select} from "@mantine/core";
import {handleAdminProductsChange} from "@/pages/admin/products/helpers";
import {SortEnum} from "@/types/SortEnum";
import {useRouter} from "next/router";
import {sidebarItemListText} from "@/common-components/SidebarItemList/sidebar-Item-list-text";
import {AdminProductsState} from "@/types/AdminProductsState";

type AdminProductNavbarSelectorsProps = {
    state: AdminProductsState,
}

const AdminProductNavbarSelectors = (props: AdminProductNavbarSelectorsProps) => {
    const {state} = props;
    const {type, sortType} = state;
    const router = useRouter();
    const items = ["Всі", ...sidebarItemListText.map((item) => item.text)];

    return (
        <AdminProductNavbarSelectorsLayout>
            <Select
                onChange={(newType) =>
                    handleAdminProductsChange(router, state, undefined, newType)}
                size={"sm"}
                radius={6}
                allowDeselect={false}
                defaultValue={type === "" ? items[0] : type}
                data={items}
            />
            <Select
                size={"sm"}
                radius={6}
                allowDeselect={false}
                defaultValue={sortType}
                onChange={(newSortType) =>
                    handleAdminProductsChange(router, state, newSortType, undefined)}
                data={Object.values(SortEnum)}
            />
        </AdminProductNavbarSelectorsLayout>
    )
}

export default AdminProductNavbarSelectors;