import AdminProductListHeadLayout from "./AdminProductListHeadLayout";
import {useViewportSize} from "@mantine/hooks";

const AdminProductListHead = () => {
    const {width} = useViewportSize();
    const isMobile = width < 960;

    if(isMobile) return null;
    return (
        <AdminProductListHeadLayout>
            <span className={"col-span-2"}>ID</span>
            <span>Назва</span>
            <span>Кількість</span>
            <span>Тип</span>
            <span>Ціна</span>
        </AdminProductListHeadLayout>
    )
}

export default AdminProductListHead;