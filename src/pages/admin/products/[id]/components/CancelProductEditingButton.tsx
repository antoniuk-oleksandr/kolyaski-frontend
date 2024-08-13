import { useRouter } from "next/router";

const CancelProductEditingButton = () => {
    const router = useRouter();

    return (
        <button
            type={"button"}
            onClick={() => router.push("/admin/products")}
            className={"w-32 bg-neutral-200 outline-none rounded-md duration-200 ease-out active:scale-95 hover:brightness-105"}
        >Відмінити
        </button>
    )
}

export default CancelProductEditingButton;