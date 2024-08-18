import {LayoutProps} from "@/types/LayoutProps";

type AddOrderProductItemImageLayoutProps = LayoutProps & {
    size?: string,
}

const AddOrderProductItemImageLayout = (props: AddOrderProductItemImageLayoutProps) => {
    const {children, size} = props;

    return (
        <div className={`bg-white overflow-hidden rounded-md aspect-1x1 flex justify-center items-center 
             ${size === undefined ? 'size-20' : size}`}>
            {children}
        </div>
    )
}

export default AddOrderProductItemImageLayout;