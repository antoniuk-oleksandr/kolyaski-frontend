import TopFooterFirstColumnHeader
    from "@/common-components/Footer/components/TopFooter/TopFooterFirstColumnHeader/TopFooterFirstColumnHeader";
import Image from "next/image";
import {useRouter} from "next/router";

const MiddleFooterFirstColumn = () => {
    const router = useRouter();

    return (
        <>
            <Image
                priority
                onClick={()=> router.push("/")}
                className={"cursor-pointer"}
                width={297}
                height={82}
                alt={"logo"}
                src={"/images/logo.png"}
            />
            <p className={"text-secondary"}>Ми працюємо тільки з перевіреними виробниками дитячих колясок та меблів та завжди піклуємось, щоб наші клієнти залишались задоволеними.</p>
        </>
    )
}

export default MiddleFooterFirstColumn;