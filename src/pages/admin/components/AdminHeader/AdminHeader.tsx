import AdminHeaderLayout from "./AdminHeaderLayout";
import Image from "next/image";

type AdminHeaderProps = {
    hide: boolean,
}

const AdminHeader = (props: AdminHeaderProps) => {
    const {hide} = props;

    if (hide) return null;
    return (
        <AdminHeaderLayout>
            <Image
                priority
                width={297}
                height={82}
                className={"h-8 w-fit"}
                src={"/images/logo.png"}
                alt={"logo"}
            />
        </AdminHeaderLayout>
    )
}

export default AdminHeader;