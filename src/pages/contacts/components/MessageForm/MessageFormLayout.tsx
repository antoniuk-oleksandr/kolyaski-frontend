import {LayoutProps} from "@/types/LayoutProps";
import {FormProvider, useForm} from "react-hook-form";
import {handleMessageFormSubmit} from "@/pages/contacts/handlers";
import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import {useRouter} from "next/router";
import {Dispatch, SetStateAction} from "react";

const schema = z.object({
    email: z.string().email("Неправильна електронна адреса"),
    name: z.string().min(1, "Ім'я є обов'язковим"),
    message: z.string().min(1, "Повідомлення є обов'язковим"),
});

type MessageFormLayoutProps = LayoutProps & {
    setSending: Dispatch<SetStateAction<boolean>>,
}

const MessageFormLayout = (props: MessageFormLayoutProps) => {
    const {children, setSending} = props;
    const methods = useForm({
        resolver: zodResolver(schema)
    });
    const router = useRouter();

    return (
        <FormProvider {...methods}>
            <form
                className={"flex flex-col gap-y-6 mt-12"}
                onSubmit={methods.handleSubmit((data) =>
                    handleMessageFormSubmit(data, router, setSending))
                }
            >
                {children}
            </form>
        </FormProvider>
    )
}

export default MessageFormLayout;