import {LayoutProps} from "@/types/LayoutProps";

const RelatedProductListLayout = (props: LayoutProps) => {
    const {children} = props;

    return (
        <div className={"flex flex-col mt-9"}>
            {children}
        </div>
    )
}

export default RelatedProductListLayout;