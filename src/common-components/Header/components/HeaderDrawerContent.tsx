import {Drawer} from "@mantine/core";
import {headerNavbarItemList} from "./HeaderNavbarItemList"
import {Key} from "react";
import HeaderNavbarItem from "@/common-components/Header/components/HeaderNavbarItem/HeaderNavbarItem";
import {useCurrentPage} from "@/common-components/Header/use-effects/use-current-page";

type HeaderDrawerContentProps = {
    opened: boolean,
    close: () => void,
}

const HeaderDrawerContent = (props: HeaderDrawerContentProps) => {
    const {opened, close} = props;
    const {currentPage} = useCurrentPage();

    return (
        <Drawer.Root opened={opened} onClose={close} position={"right"}>
            <Drawer.Overlay/>
            <Drawer.Content>
                <Drawer.Header className={"!bg-primary"}>
                    <Drawer.CloseButton className={"!text-white"}/>
                </Drawer.Header>
                <Drawer.Body className={"!bg-primary h-headerDrawer text-white"}>
                    {headerNavbarItemList.map((item, index: Key) => (
                        <HeaderNavbarItem
                            className={"!text-lg"}
                            clickAction={close}
                            key={index}
                            text={item.text}
                            link={item.link}
                            isSelected={currentPage === item.link}
                        />
                    ))}
                </Drawer.Body>
            </Drawer.Content>
        </Drawer.Root>
    )
}

export default HeaderDrawerContent;