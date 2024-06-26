type PaymentMethodsTextPropsProps = {
    firstLineText: string,
    secondLineText: string,
}

const PageBodyText = (props: PaymentMethodsTextPropsProps) => {
    const {firstLineText, secondLineText} = props;

    return (
        <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-3 ">{firstLineText}</h2>
            <p className="mb-2 text-justify">{secondLineText}</p>
        </section>
    )
}

export default PageBodyText;