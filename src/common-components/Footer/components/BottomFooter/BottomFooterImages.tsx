import Image from 'next/image';

const BottomFooterImages = () => {
    const srcs = ['/images/liqpay.jpg', '/images/visa.svg', '/images/mastercard.svg'];

    return (
        <div className={"flex items-center gap-x-2 col-start-3"}>
            {srcs.map((src, index) => (
                <Image
                    className={"w-full h-full"}
                    alt={'logo'}
                    src={src}
                    key={index}
                    width={50}
                    height={50}
                />
            ))}
        </div>
    )
}

export default BottomFooterImages;