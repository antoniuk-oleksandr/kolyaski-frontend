import "@/styles/globals.css";
import type {AppProps} from "next/app";
import Header from "@/common-components/Header/Header";
import AppLayout from "@/pages/AppLayout";
import '@mantine/core/styles.css';
import Footer from "@/common-components/Footer/Footer";
import PageLayout from "@/pages/PageLayout";

export default function App({Component, pageProps}: AppProps) {
    return (
        <AppLayout>
            <Header/>
            <PageLayout>
                <Component {...pageProps} />
            </PageLayout>
            <Footer/>
        </AppLayout>
    )
}