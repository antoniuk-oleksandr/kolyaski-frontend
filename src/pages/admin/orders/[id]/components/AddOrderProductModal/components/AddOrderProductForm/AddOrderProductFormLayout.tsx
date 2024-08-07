import {ReactNode} from "react";
import {FormProvider, useForm} from "react-hook-form";

type AddOrderProductFormProps = {
    children: ReactNode;
}

const AddOrderProductFormLayout = (props: AddOrderProductFormProps) => {
    const {children} = props;
    const methods = useForm();

    return (
        <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit((data) => console.log(data))}>
                {children}
            </form>
        </FormProvider>
    )
}

export default AddOrderProductFormLayout;