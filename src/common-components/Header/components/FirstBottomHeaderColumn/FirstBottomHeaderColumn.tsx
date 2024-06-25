import FirstBottomHeaderColumnLayout from "./FirstBottomHeaderColumnLayout";
import HeaderPhoneNumber from "@/common-components/Header/components/HeaderPhoneNumber/HeaderPhoneNumber";
import Image from "next/image";
import {useRouter} from "next/router";
import HeaderDrawer from "@/common-components/Header/components/HeaderDrawer/HeaderDrawer";

const FirstBottomHeaderColumn = () => {
    const router = useRouter();

    return (
        <FirstBottomHeaderColumnLayout>
            <HeaderPhoneNumber/>
            <HeaderDrawer/>
            <Image
                priority
                onClick={()=> router.push("/")}
                className={"cursor-pointer"}
                width={297}
                height={82}
                alt={"logo"}
                src={"/images/logo.png"}
            />
        </FirstBottomHeaderColumnLayout>
    )
}

export default FirstBottomHeaderColumn;