import {LayoutProps} from "@/types/LayoutProps";
import {citySelectorOpenSignal} from "@/pages/checkout/components/CitySelector/signals/city-selector-open-signal";

const CitySelectorContainerLayout = (props: LayoutProps) => {
    const {children} = props;

    return (
        <div
            onClick={() => citySelectorOpenSignal.value = ++citySelectorOpenSignal.value}
            className={"rounded-md bg-white px-4 py-3 flex gap-x-4 text-sm cursor-pointer hover:bg-neutral-200 duration-200 ease-out"}>
            {children}
        </div>
    )
}

export default CitySelectorContainerLayout;