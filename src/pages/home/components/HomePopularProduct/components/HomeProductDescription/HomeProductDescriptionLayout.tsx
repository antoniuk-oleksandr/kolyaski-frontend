import {LayoutProps} from "@/types/LayoutProps";

const HomeProductDescriptionLayout = (props: LayoutProps) => {
    const {children} = props;

    return (
        <div className="p-3 text-sm flex flex-col gap-y-3">
            {children}
        </div>
    )
}

export default HomeProductDescriptionLayout;