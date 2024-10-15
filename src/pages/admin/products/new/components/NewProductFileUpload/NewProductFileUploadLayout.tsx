import {LayoutProps} from "@/types/LayoutProps";

const NewProductFileUploadLayout = (props: LayoutProps) => {
    const {children} = props;

    return (
        <div
            className={"flex flex-col gap-y-6 phone:mt-[calc(50%)] px-6"}
        >
            {children}
        </div>
    )
}

export default NewProductFileUploadLayout;