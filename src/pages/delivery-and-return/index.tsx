import HomeContentLayout from "@/pages/home/components/HomeContentLayout";
import DeliveryAndReturnLeftSide
    from "@/pages/delivery-and-return/components/DeliveryAndReturnLeftSide/DeliveryAndReturnLeftSide";
import DeliveryAndReturnRightSide
    from "@/pages/delivery-and-return/components/DeliveryAndReturnRightSide/DeliveryAndReturnRightSide";

const DeliveryReturnPage = () => {
    return (
        <HomeContentLayout>
            <DeliveryAndReturnLeftSide/>
            <DeliveryAndReturnRightSide/>
        </HomeContentLayout>
    )
}

export default DeliveryReturnPage;