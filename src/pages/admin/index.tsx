import {useSales} from "@/pages/admin/use-effects/use-sales";
import Chart from "@/pages/admin/components/Chart/Chart";
import PageTitle from "@/common-components/PageTitle";
import AdminChartColumn from "@/pages/admin/components/AdminChartColumn";
import AdminPageLayout from "@/pages/admin/AdminPageLayout";

const AdminPage = () => {
    useSales();

    const data = [
        {date: '1 Черв.', "Прибуток": 23456},
        {date: '5 Черв.', "Прибуток": 28765},
        {date: '9 Черв.', "Прибуток": 21543},
        {date: '12 Черв.', "Прибуток": 12345},
        {date: '14 Черв.', "Прибуток": 25678},
        {date: '17 Черв.', "Прибуток": 19987},
        {date: '18 Черв.', "Прибуток": 11234},
        {date: '22 Черв.', "Прибуток": 22345},
        {date: '25 Черв.', "Прибуток": 19345},
        {date: '30 Черв.', "Прибуток": 17890}
    ]

    return (
        <AdminPageLayout>
            <PageTitle text={'Адмін панель'}/>
            <AdminChartColumn>
                <Chart text={'Дохід за тиждень'} data={data}/>
                <Chart text={'Дохід за місяць'} data={data}/>
            </AdminChartColumn>
            <Chart text={'Дохід за весь час'} data={data}/>
        </AdminPageLayout>
    )
}

export default AdminPage;