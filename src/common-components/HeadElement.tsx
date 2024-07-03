import Head from "next/head";

type HeadElementProps = {
    pageTitle: string;
}

const HeadElement = (props: HeadElementProps) => {
    const {pageTitle} = props;

    if(pageTitle === undefined) return null;
    return (
        <Head>
            <title>{pageTitle + ' - Купити коляски в дитячому інтернет-магазині'}</title>
        </Head>
    )
}

export default HeadElement;