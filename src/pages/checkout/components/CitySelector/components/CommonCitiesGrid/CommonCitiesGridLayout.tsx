import {LayoutProps} from "@/types/LayoutProps";

const CommonCitiesGridLayout = (props: LayoutProps) => {
    const {children} = props;

    return (
        <div className={"w-full grid grid-cols-3 gap-y-3 font-medium"}>
            {children}
        </div>
    )
}

export default CommonCitiesGridLayout;