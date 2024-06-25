import {LayoutProps} from "@/types/LayoutProps";

const SearchButtonLayout = (props: LayoutProps) => {
    const {children} = props;

    return (
        <button
            type={"submit"}
            className={"w-24 bg-secondary rounded-r-md outline-none flex items-center justify-center text-white text-xl h-full hover:bg-white hover:text-neutral-800 duration-200 ease-out"}>
            {children}
        </button>
    )
}

export default SearchButtonLayout;