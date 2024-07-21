import AdminSignInLayout from "./AdminSignInLayout";
import MessageFormInput from "@/pages/contacts/components/MessageFormInput/MessageFormInput";
import Button from "@/common-components/Button";
import AdminSingInTopBlock
    from "@/pages/admin/components/AdminSignIn/components/AdminSingInTopBlock/AdminSingInTopBlock";
import {useState} from "react";

const AdminSignIn = () => {
    const [sending, setSending] = useState<boolean>(false);

    return (
        <AdminSignInLayout  setSending={setSending}>
            <AdminSingInTopBlock/>
            <MessageFormInput id="username" label="Ім'я користувача" required />
            <MessageFormInput id="password" label="Пароль" type="password" required />
            <Button sending={sending} type="submit" className="w-full mt-6">Увійти</Button>
        </AdminSignInLayout>
    );
}

export default AdminSignIn;
