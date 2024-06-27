import {LayoutProps} from "@/types/LayoutProps";
import {FormProvider, useForm} from "react-hook-form";
import {handleMessageFormSubmit} from "@/pages/contacts/handlers";
import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import {useRouter} from "next/router";

const schema = z.object({
    email: z.string().email("Неправильна електронна адреса"),
    name: z.string().min(1, "Ім'я є обов'язковим"),
});

const MessageFormLayout = (props: LayoutProps) => {
    const {children} = props;
    const methods = useForm({
        resolver: zodResolver(schema)
    });
    const router = useRouter();

    return (
        <FormProvider {...methods}>
            <form
                className={"flex flex-col gap-y-6 mt-12"}
                onSubmit={methods.handleSubmit((data) =>
                    handleMessageFormSubmit(data, router))
                }
            >
                {children}
            </form>
        </FormProvider>
    )
}

export default MessageFormLayout;