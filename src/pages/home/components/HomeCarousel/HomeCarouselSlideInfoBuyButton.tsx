import {useRouter} from "next/router";

type HomeCarouselSlideInfoBuyButtonProps = {
    link: string,
}

const HomeCarouselSlideInfoBuyButton = (props: HomeCarouselSlideInfoBuyButtonProps) => {
    const {link} = props;
    const router = useRouter();

    return (
        <button
            className={"bg-primary rounded-md absolute -bottom-6 uppercase py-3 px-6 text-white font-semibold ease-out duration-200 hover:bg-white hover:text-neutral-600 active:scale-95 outline-none"}
            onClick={() => router.push(link)}
            type={"button"}
        >Купити зараз</button>
    )
}

export default HomeCarouselSlideInfoBuyButton;