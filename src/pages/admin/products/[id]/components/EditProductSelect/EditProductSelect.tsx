import EditProductSelectLayout from "./EditProductSelectLayout";
import {Select} from "@mantine/core";
import MessageFormError from "@/pages/contacts/components/MessageFormError";
import {useFormContext} from "react-hook-form";

type EditProductSelectProps = {
    defaultValue: string,
    data: string[],
    id: string,
    label: string,
}

const EditProductSelect = (props: EditProductSelectProps) => {
    const {defaultValue, data, id, label} = props;
    const {setValue, clearErrors} = useFormContext();
    const error = useFormContext().formState.errors[id];
    const isErrorPresent = error !== undefined;

    return (
        <EditProductSelectLayout>
            <label className={`${isErrorPresent ? 'text-red-500' : ''}`} htmlFor="typeSelect">{label}</label>
            <Select
                error={isErrorPresent}
                className={"mb-1"}
                id={id}
                onChange={(value) =>  {
                    setValue(id, value);
                    clearErrors(id);
                }}
                data={data}
                defaultValue={defaultValue}
            />
            <MessageFormError error={error}/>
        </EditProductSelectLayout>
    )
}

export default EditProductSelect;