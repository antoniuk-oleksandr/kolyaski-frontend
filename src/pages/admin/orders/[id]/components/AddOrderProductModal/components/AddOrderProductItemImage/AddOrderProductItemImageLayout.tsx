import {LayoutProps} from "@/types/LayoutProps";

const AddOrderProductItemImageLayout = (props: LayoutProps) => {
    const {children} = props;

    return (
        <div className={"size-20 bg-white rounded-md aspect-1x1 flex justify-center items-center"}>
            {children}
        </div>
    )
}

export default AddOrderProductItemImageLayout;