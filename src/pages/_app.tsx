import "@/styles/globals.css";
import "@/styles/scrollbar.css";
import type {AppProps} from "next/app";
import Header from "@/common-components/Header/Header";
import AppLayout from "@/pages/AppLayout";
import '@mantine/core/styles.css';
import Footer from "@/common-components/Footer/Footer";
import PageLayout from "@/pages/PageLayout";
import SuccessDialog from "@/common-components/SuccessDialog/SuccessDialog";

export default function App({Component, pageProps}: AppProps) {
    return (
        <AppLayout>
            <SuccessDialog/>
            <Header/>
            <PageLayout>
                <Component {...pageProps} />
            </PageLayout>
            <Footer/>
        </AppLayout>
    )
}