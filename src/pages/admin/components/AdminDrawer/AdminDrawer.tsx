import AdminDrawerLayout from "./AdminDrawerLayout";
import {IoMenu} from "react-icons/io5";
import {Drawer} from "@mantine/core";
import React from "react";
import {useDisclosure, useViewportSize} from "@mantine/hooks";
import { items } from "@/utils/admin-sidebar-items";
import AdminSidebarItem from "@/pages/admin/components/AdminSidebarItem/AdminSidebarItem";
import {useAdminPage} from "@/pages/admin/use-admin-page";

const AdminDrawer = () => {
    const [opened, {open, close}] = useDisclosure(false);
    const {width} = useViewportSize();
    const isMobile = width < 960;
    const {page} = useAdminPage();

    if (!isMobile) return null;
    return (
        <AdminDrawerLayout>
            <IoMenu onClick={open} className={"text-2xl"}/>
            <Drawer.Root size={"100%"} opened={opened} position={"right"} onClose={close}>
                <Drawer.Overlay/>
                <Drawer.Content>
                    <Drawer.Body className={"!p-0"}>
                        <div className={"!p-3 !flex h-14 !items-center border-b border-b-neutral-200 justify-between"}>
                            <Drawer.Title className={""}>Навігація</Drawer.Title>
                            <Drawer.CloseButton className={"!outline-none"}/>
                        </div>
                        {items.map((item, index) => (
                            <AdminSidebarItem
                                clickAction={close}
                                isSelected={page === item.link}
                                item={item}
                                key={index}
                            />
                        ))}
                    </Drawer.Body>
                </Drawer.Content>
            </Drawer.Root>
        </AdminDrawerLayout>
    )
}

export default AdminDrawer;
