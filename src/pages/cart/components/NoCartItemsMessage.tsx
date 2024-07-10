import Image from "next/image";

const NoCartItemsMessage = () => {
    return (
        <div className={"size-full grid place-items-center flex-1"}>
            <Image
                priority
                className={"size-[512px] object-center object-contain"}
                width={512}
                height={512}
                src={"/images/empty-cart.png"} alt={"empty-cart"} />
            <p className={"w-full text-center text-2xl -mt-9"}>Ваш кошик порожній.</p>
        </div>
    )
}

export default NoCartItemsMessage;