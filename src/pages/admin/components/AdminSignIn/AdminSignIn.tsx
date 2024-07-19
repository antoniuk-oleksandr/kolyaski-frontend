import AdminSignInLayout from "./AdminSignInLayout";
import MessageFormInput from "@/pages/contacts/components/MessageFormInput/MessageFormInput";
import Button from "@/common-components/Button";
import AdminSingInTopBlock
    from "@/pages/admin/components/AdminSignIn/components/AdminSingInTopBlock/AdminSingInTopBlock";

const AdminSignIn = () => {
    return (
        <AdminSignInLayout>
            <AdminSingInTopBlock/>
            <MessageFormInput id="username" label="Ім'я користувача" required />
            <MessageFormInput id="password" label="Пароль" type="password" required />
            <Button type="submit" className="w-full mt-6">Увійти</Button>
        </AdminSignInLayout>
    );
}

export default AdminSignIn;
