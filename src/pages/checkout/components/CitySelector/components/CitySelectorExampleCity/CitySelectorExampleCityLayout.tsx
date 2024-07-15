import {LayoutProps} from "@/types/LayoutProps";

const CitySelectorExampleCityLayout = (props: LayoutProps) => {
    const {children} = props;

    return (
        <div className={"mt-6 flex text-sm gap-x-1"}>
            {children}
        </div>
    )
}

export default CitySelectorExampleCityLayout;