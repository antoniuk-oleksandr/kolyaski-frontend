import {LayoutProps} from "@/types/LayoutProps";

type EditProductImageLayoutProps = LayoutProps & {
    dragging: boolean,
}

const EditProductImageLayout = (props: EditProductImageLayoutProps) => {
    const {children, dragging} = props;

    return (
        <div
            className={`h-full  relative bg-white ring-neutral-200 m-0.5 p-3 ring-1 flex-shrink-0 w-52 aspect-3x4 rounded-md
            ${dragging ? 'cursor-grabbing' : 'cursor-grab'}`}
        >
            {children}
        </div>
    )
}

export default EditProductImageLayout;