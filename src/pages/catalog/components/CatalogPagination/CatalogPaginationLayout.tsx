import {LayoutProps} from "@/types/LayoutProps";

const CatalogPaginationLayout = (props: LayoutProps) => {
    const {children} = props;

    return (
        <div className={"grid mt-12 place-items-center"}>
            {children}
        </div>
    )
}

export default CatalogPaginationLayout;