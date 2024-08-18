import MobileOrderButtonLayout from "./MobileOrderButtonLayout";
import Button from "@/common-components/Button";
import {useRouter} from "next/router";

type MobileOrderButtonProps = {
    id: number,
    link: string,
}

const MobileOrderButton = (props: MobileOrderButtonProps) => {
    const {id, link} = props;
    const router = useRouter();

    return (
        <MobileOrderButtonLayout>
            <Button
                onClick={() => router.push(link)}
                className={"!w-full"}
            >Переглянути деталі</Button>
        </MobileOrderButtonLayout>
    )
}

export default MobileOrderButton;