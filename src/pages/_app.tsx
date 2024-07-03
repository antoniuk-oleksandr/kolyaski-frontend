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
import {pageTitles} from "@/common-components/Header/page-titles";
import HeadElement from "@/common-components/HeadElement";

export default function App({Component, pageProps}: AppProps) {
    const router = useRouter();
    const pageTitle = pageTitles[router.pathname as keyof typeof pageTitles];

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