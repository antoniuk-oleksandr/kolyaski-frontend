type HeaderSearchInputElement = {
    register: any,
}

const HeaderSearchInputElement = (props: HeaderSearchInputElement) => {
    const {register} = props;

    return (
        <input
            {...register('search', {required: true})}
            autoComplete={'off'}
            className={"outline-none w-headerSearchInput rounded-l-md px-3 text-sm"}
            type="text"
        />
    )
}

export default HeaderSearchInputElement;