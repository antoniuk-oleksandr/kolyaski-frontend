type NoCityMessageProps = {
    containError: boolean,
}

const NoCityMessage = (props: NoCityMessageProps) => {
    const {containError} = props;

    if(!containError) return null;
    return (
        <p className={"text-xs absolute top-14 mt-1 text-red-500"}>
            Місто не знайдено. Перевірте написання або доступність доставки Нової Пошти.
        </p>
    )
}

export default NoCityMessage;