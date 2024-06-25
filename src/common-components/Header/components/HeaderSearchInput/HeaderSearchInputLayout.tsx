import {LayoutProps} from "@/types/LayoutProps";
import {onHeaderFormSubmit} from "@/common-components/Header/components/HeaderSearchInput/handlers";
import {useRouter} from "next/router";

type HeaderSearchInputLayoutProps = LayoutProps & {
    handleSubmit: any,
}

const HeaderSearchInputLayout = (props: HeaderSearchInputLayoutProps) => {
    const {children, handleSubmit} = props;
    const router = useRouter();

    return (
        <form
            onSubmit={handleSubmit((data: any) => onHeaderFormSubmit(data, router))}
            className={"bg-white w-full rounded-md flex h-9"}
        >
            {children}
        </form>
    )
}

export default HeaderSearchInputLayout;