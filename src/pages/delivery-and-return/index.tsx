import PageContentLayout from "@/common-components/PageContentLayout";
import DeliveryAndReturnLeftSide
    from "@/pages/delivery-and-return/components/DeliveryAndReturnLeftSide/DeliveryAndReturnLeftSide";
import DeliveryAndReturnRightSide
    from "@/pages/delivery-and-return/components/DeliveryAndReturnRightSide/DeliveryAndReturnRightSide";

const DeliveryReturnPage = () => {
    return (
        <PageContentLayout>
            <DeliveryAndReturnLeftSide/>
            <DeliveryAndReturnRightSide/>
        </PageContentLayout>
    )
}

export default DeliveryReturnPage;