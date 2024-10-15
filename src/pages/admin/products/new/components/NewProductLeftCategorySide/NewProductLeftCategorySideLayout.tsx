import {LayoutProps} from "@/types/LayoutProps";

const NewProductLeftCategorySideLayout = (props: LayoutProps) => {
    const {children} = props;

    return (
        <div className={"flex gap-x-3 items-center"}>
            {children}
        </div>
    )
}

export default NewProductLeftCategorySideLayout;