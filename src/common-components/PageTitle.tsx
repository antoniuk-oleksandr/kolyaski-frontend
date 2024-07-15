type PageTitleProps = {
    text: string,
}

const PageTitle = (props: PageTitleProps) => {
    const {text} = props;

    return (
        <h2 className={"text-3xl font-semibold mb-4 text-primary"}>{text}</h2>
    )
}

export default PageTitle;