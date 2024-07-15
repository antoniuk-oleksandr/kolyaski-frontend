import {LayoutProps} from "@/types/LayoutProps";
import {Modal} from "@mantine/core";
import {useDisclosure, useViewportSize} from "@mantine/hooks";
import {useCitySelector} from "@/pages/checkout/components/CitySelector/use-city-selector";

const CitySelectorLayout = (props: LayoutProps) => {
    const {children} = props;
    const [opened, {open, close}] = useDisclosure(false);
    useCitySelector(open, close);
    const {width} = useViewportSize();
    const isPhone = width <= 960;

    return (
        <Modal.Root fullScreen={isPhone} radius={"md"} size={"640"} centered opened={opened} onClose={close}>
            <Modal.Overlay/>
            <Modal.Content>
                <Modal.Header className={"border-b border-neutral-200"}>
                    <Modal.Title>
                        <p className={"text-xl font-semibold"}>Виберіть своє місто</p>
                    </Modal.Title>
                    <Modal.CloseButton className={"!outline-none"}/>
                </Modal.Header>
                <Modal.Body className={"!p-6 text-neutral-400"}>
                    {children}
                </Modal.Body>
            </Modal.Content>
        </Modal.Root>
    )
}

export default CitySelectorLayout;