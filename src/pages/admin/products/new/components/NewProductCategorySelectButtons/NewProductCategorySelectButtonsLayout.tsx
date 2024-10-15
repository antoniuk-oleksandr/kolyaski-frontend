import {LayoutProps} from "@/types/LayoutProps";

const NewProductCategorySelectButtonsLayoutLayout = (props: LayoutProps) => {
    const {children} = props;

    return (
        <div className={"flex gap-x-3 mt-6 px-6 w-full justify-end phone:justify-between"}>
            {children}
        </div>
    )
}

export default NewProductCategorySelectButtonsLayoutLayout;