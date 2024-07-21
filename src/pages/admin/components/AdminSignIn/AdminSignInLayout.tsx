import {LayoutProps} from "@/types/LayoutProps";
import {FormProvider, useForm} from "react-hook-form";
import {Dispatch, SetStateAction} from "react";
import {handleAdminSignFormSubmit} from "@/pages/admin/components/AdminSignIn/handlers";
import {TokenInfo} from "@/types/TokenInfo";
import {useDispatch} from "react-redux";

type FormData = {
    name: string,
    password: string,
};

type AdminSignInLayoutProps = LayoutProps & {
    setSending: Dispatch<SetStateAction<boolean>>,
}

const AdminSignInLayout = (props: AdminSignInLayoutProps) => {
    const {children, setSending} = props;
    const methods = useForm<FormData>();
    const dispatch = useDispatch();

    return (
        <div className="w-full h-svh grid place-items-center phone:bg-white">
            <FormProvider {...methods}>
                <form
                    className="bg-white rounded-md p-6 flex flex-col gap-y-6 w-full max-w-md mx-auto py-16"
                    onSubmit={methods.handleSubmit((data) =>
                        handleAdminSignFormSubmit(data, setSending, dispatch))}
                >
                    {children}
                </form>
            </FormProvider>
        </div>
    );
}

export default AdminSignInLayout;
