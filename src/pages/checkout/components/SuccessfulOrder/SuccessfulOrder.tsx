import SuccessfulOrderLayout from "./SuccessfulOrderLayout";
import Image from "next/image";

const SuccessfulOrder = () => {
    return (
        <SuccessfulOrderLayout>
            <div className={"grid place-items-center"}>
                <Image
                    draggable={false}
                    priority
                    className={"size-[300px] object-center object-contain"}
                    width={512}
                    height={512}
                    src={"/images/emoji-party-popper.png"} alt={"empty-cart"}/>
                <p className={"w-full text-center text-2xl mb-3"}>Ваше замовлення оформлено!</p>
            </div>
        </SuccessfulOrderLayout>
    )
}

export default SuccessfulOrder;