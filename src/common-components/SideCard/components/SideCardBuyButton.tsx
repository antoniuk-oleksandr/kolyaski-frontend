import {useRouter} from "next/router";

type SideCardBuyButtonProps = {
    link: string,
    buyButtonStyles: string,
}

const SideCardBuyButton = (props: SideCardBuyButtonProps) => {
    const {link, buyButtonStyles} = props
    const router = useRouter();

    return (
        <button
            onClick={() => router.push(link)}
            className={`mt-9 w-full rounded-md font-semibold text-base duration-200 ease-out py-3 uppercase ${buyButtonStyles}`}>
            Купити<br/>Зараз
        </button>
    )
}

export default SideCardBuyButton;