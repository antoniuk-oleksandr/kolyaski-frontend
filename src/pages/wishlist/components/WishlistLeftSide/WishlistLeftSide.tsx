import WishlistLeftSideLayout from "./WishlistLeftSideLayout";
import Image from "next/image";
import TwoLinesText from "@/common-components/TwoLinesText";
import WishlistImageLayout from "@/pages/wishlist/components/WishlistImageLayout";

const WishlistLeftSide = () => {
    return (
        <WishlistLeftSideLayout>
            <WishlistImageLayout>
                <Image
                    priority
                    className={"size-140 aspect-1x1 object-cover object-center"}
                    width={"600"}
                    height={"600"}
                    src={'/images/wishlist.png'}
                    alt={'wishlist'}
                />
            </WishlistImageLayout>
            <TwoLinesText
                firstLineText={'Для чого?'}
                secondLineText={'На спеціальну картку “Пакунок малюка” Міністерство соціальної політики України буде перераховувати 5000 грн для покупки товарів для немовля та його мами.'}
            />
            <TwoLinesText
                firstLineText={'Як оформити картку?'}
                secondLineText={'Після народження малюка завітайте до відділення ПриватБанку та оформіть спеціальну картку, “Пакунок малюка”. Для цього знадобиться паспорт та ІПН.'}
            />
            <TwoLinesText
                firstLineText={'Як використовувати картку?'}
                secondLineText={'Після нарахування виплат, батьки можуть використовувати грошову компенсацію лише у безготівковій формі на придбання товарів для дитини.'}
            />
        </WishlistLeftSideLayout>
    )
}

export default WishlistLeftSide;