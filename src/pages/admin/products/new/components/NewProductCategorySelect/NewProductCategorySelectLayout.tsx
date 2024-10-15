import {LayoutProps} from "@/types/LayoutProps";

const NewProductCategorySelectLayout = (props: LayoutProps) => {
    const {children} = props;

    return (
        <div className={"flex flex-col items-end text-neutral-600 text-base"}>
            {children}
        </div>
    )
}

export default NewProductCategorySelectLayout;