import {useRouter} from "next/router";
import {AdminProductsState} from "@/types/AdminProductsState";
import {makeProductsLink} from "@/pages/admin/products/helpers";

type CancelProductEditingButtonProps = {
    adminProductsState: AdminProductsState,
    linkType: "new" | "edit" | "all",
}

const CancelProductEditingButton = (props: CancelProductEditingButtonProps) => {
    const {adminProductsState, linkType} = props;
    const router = useRouter();

    return (
        <button
            type={"button"}
            onClick={() => router.push(makeProductsLink(adminProductsState, undefined, linkType))}
            className={"w-32 h-11  bg-neutral-200 outline-none rounded-md duration-200 ease-out active:scale-95 hover:brightness-105"}
        >Відмінити
        </button>
    )
}

export default CancelProductEditingButton;