import ProductImagesViewPanelRightSideLayout from "./ProductImagesViewPanelRightSideLayout";
import ProductImagesViewPanelIconLayout from "@/pages/product/[id]/components/ProductImagesViewPanelIconLayout";
import {MdClose, MdFullscreen, MdFullscreenExit} from "react-icons/md";
import {Dispatch, SetStateAction} from "react";
import {useFullscreen} from "@mantine/hooks";

type ProductImagesViewPanelRightSideProps = {
    setIsViewShown: Dispatch<SetStateAction<boolean>>
}

const ProductImagesViewPanelRightSide = (props: ProductImagesViewPanelRightSideProps) => {
    const {setIsViewShown} = props;
    const {toggle, fullscreen} = useFullscreen();

    return (
        <ProductImagesViewPanelRightSideLayout>
            <ProductImagesViewPanelIconLayout action={toggle}>
                {!fullscreen ? <MdFullscreen/> : <MdFullscreenExit/>}
            </ProductImagesViewPanelIconLayout>
            <ProductImagesViewPanelIconLayout action={() => setIsViewShown(false)}>
                <MdClose/>
            </ProductImagesViewPanelIconLayout>
        </ProductImagesViewPanelRightSideLayout>
    )
}

export default ProductImagesViewPanelRightSide;