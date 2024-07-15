import {LayoutProps} from "@/types/LayoutProps";

const CitySelectorContainerCityLayout = (props: LayoutProps) => {
    const {children} = props;

    return (
        <div className={"flex flex-col gap-y-1 w-full"}>
            {children}
        </div>
    )
}

export default CitySelectorContainerCityLayout;