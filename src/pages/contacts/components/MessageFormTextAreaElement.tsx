import {useFormContext} from "react-hook-form";

type MessageFormTextAreaElementProps = {
    id: string,
    required?: boolean,
}

const MessageFormTextAreaElement = (props: MessageFormTextAreaElementProps) => {
    const { id, required} = props;
    const {register} = useFormContext();

    return (
        <textarea
            style={{resize: "none"}}
            rows={6}
            id={id}
            {...register(id, {required})}
            className={"outline-none rounded-md text-sm py-2 px-3 ring-1 ring-neutral-200 duration-200 ease-out focus:ring-primary hover:ring-primary"}
        />
    )
}

export default MessageFormTextAreaElement;