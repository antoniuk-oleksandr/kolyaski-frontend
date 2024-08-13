import {useRouter} from "next/router";

type AdminProductPageHeadButtonProps = {
    hideNewProductButton: boolean,
}

const AdminProductPageHeadButton = (props: AdminProductPageHeadButtonProps) => {
    const {hideNewProductButton} = props;
    const router = useRouter();

    if (hideNewProductButton) return null;
    return (
        <button
            onClick={() => router.push("/admin/products/new")}
            className={"h-11 px-4 bg-neutral-200 rounded-md outline-none active:scale-95 duration-200 ease-out hover:brightness-110"}
        >Додати товар</button>
    )
}

export default AdminProductPageHeadButton;