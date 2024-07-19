import "@/styles/globals.css";
import "@/styles/scrollbar.css";
import type {AppProps} from "next/app";
import Header from "@/common-components/Header/Header";
import AppLayout from "@/pages/AppLayout";
import '@mantine/core/styles.css';
import Footer from "@/common-components/Footer/Footer";
import PageLayout from "@/pages/PageLayout";
import SuccessDialog from "@/common-components/SuccessDialog/SuccessDialog";
import {useRouter} from "next/router";
import HeadElement from "@/common-components/HeadElement";
import {usePageTitle} from "@/general-use-effects/use-page-title";
import AdminPanelLayout from "@/pages/AdminPanelLayout";

export default function App({Component, pageProps}: AppProps) {
    const router = useRouter();
    const {pageTitle} = usePageTitle(router);
    const pagesToExclude = ["/admin", "/admin/comments", "/admin/orders", "/admin/products"];
    const exclude = pagesToExclude.includes(router.pathname);

    return (
        <>
            <HeadElement pageTitle={pageTitle}/>
            <AppLayout>
                <SuccessDialog/>
                {!exclude && <Header/>}
                {!exclude && (
                    <PageLayout>
                        <Component {...pageProps} />
                    </PageLayout>
                )}
                {exclude && (
                    <AdminPanelLayout>
                        <Component {...pageProps} />
                    </AdminPanelLayout>
                )}
                {!exclude && <Footer/>}
            </AppLayout>
        </>
    )
}