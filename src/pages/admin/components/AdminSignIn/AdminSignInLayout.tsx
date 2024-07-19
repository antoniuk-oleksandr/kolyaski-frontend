import {LayoutProps} from "@/types/LayoutProps";
import {FormProvider, useForm, SubmitHandler} from "react-hook-form";
import {postSignInRequest} from "@/api/post-sign-in-request";
import {setTokenInfoToCookies} from "@/utils/cookie-utils";

type FormData = {
    name: string;
    password: string;
};

const AdminSignInLayout = (props: LayoutProps) => {
    const {children} = props;
    const methods = useForm<FormData>();

    const onSubmit: SubmitHandler<FormData> = async data => {
        const response = await postSignInRequest(data);
        if (response.data) setTokenInfoToCookies(response.data);
    };

    return (
        <div className="w-full h-svh grid place-items-center">
            <FormProvider {...methods}>
                <form
                    className="bg-white rounded-md p-6 flex flex-col gap-y-6 w-full max-w-md mx-auto py-16"
                    onSubmit={methods.handleSubmit(onSubmit)}
                >
                    {children}
                </form>
            </FormProvider>
        </div>
    );
}

export default AdminSignInLayout;
