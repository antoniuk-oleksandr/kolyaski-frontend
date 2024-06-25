import HeaderDrawerLayout from "./HeaderDrawerLayout";
import {useDisclosure} from "@mantine/hooks";
import DrawerButton from "@/common-components/Header/components/DrawerButton";
import HeaderDrawerContent from "@/common-components/Header/components/HeaderDrawerContent";

const HeaderDrawer = () => {
    const [opened, {open, close}] = useDisclosure(false);

    return (
        <HeaderDrawerLayout>
            <DrawerButton open={open}/>
            <HeaderDrawerContent opened={opened} close={close}/>
        </HeaderDrawerLayout>
    )
}

export default HeaderDrawer;