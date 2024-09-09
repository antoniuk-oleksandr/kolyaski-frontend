import {useSales} from "@/pages/admin/use-effects/use-sales";
import Chart from "@/pages/admin/components/Chart/Chart";
import AdminChartColumn from "@/pages/admin/components/AdminChartColumn";
import AdminPageLayout from "@/pages/admin/AdminPageLayout";
import {useDispatch, useSelector} from "react-redux";
import {TokenInfo} from "@/types/TokenInfo";
import AdminLoader from "@/pages/admin/components/AdminLoader";
import AdminElementLayout from "@/pages/admin/components/AdminElementLayout";
import { useRouter } from "next/router";

const AdminPage = () => {
    const {tokenInfo} = useSelector((state: any) => state.token) as { tokenInfo: TokenInfo | null };
    const dispatch = useDispatch();
    const router = useRouter();
    const {sales} = useSales(tokenInfo, dispatch, router);

    if (!sales) return <AdminLoader/>;
    return (
        <AdminPageLayout>
            <AdminElementLayout>
                <AdminChartColumn>
                    <Chart text={'Дохід за тиждень'} data={sales.week}/>
                    <Chart text={'Дохід за місяць'} data={sales.month}/>
                </AdminChartColumn>
                <Chart text={'Дохід за весь час'} data={sales.allTime}/>
            </AdminElementLayout>
        </AdminPageLayout>
    )
}

export default AdminPage;