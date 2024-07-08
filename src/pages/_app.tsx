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

export default function App({Component, pageProps}: AppProps) {
    const router = useRouter();
    const {pageTitle} = usePageTitle(router);

    return (
        <>
            <HeadElement pageTitle={pageTitle}/>
            <AppLayout>
            <SuccessDialog/>
            <Header/>
            <PageLayout>
                <Component {...pageProps} />
            </PageLayout>
            <Footer/>
        </AppLayout>
        </>
    )
}