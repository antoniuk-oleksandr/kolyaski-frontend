import Head from "next/head";

type HeadElementProps = {
    pageTitle: string | null;
}

const HeadElement = (props: HeadElementProps) => {
    const {pageTitle} = props;

    if(!pageTitle) return null;
    return (
        <Head>
            <title>{pageTitle + ' - Купити коляски в дитячому інтернет-магазині'}</title>
        </Head>
    )
}

export default HeadElement;