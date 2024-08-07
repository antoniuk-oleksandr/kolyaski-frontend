import MobileOrderButtonLayout from "./MobileOrderButtonLayout";
import Button from "@/common-components/Button";
import {useRouter} from "next/router";

type MobileOrderButtonProps = {
    id: number,
}

const MobileOrderButton = (props: MobileOrderButtonProps) => {
    const {id} = props;
    const router = useRouter();

    return (
        <MobileOrderButtonLayout>
            <Button
                onClick={() => router.push(`/admin/orders/${id}`)}
                className={"!w-full"}
            >Переглянути деталі</Button>
        </MobileOrderButtonLayout>
    )
}

export default MobileOrderButton;