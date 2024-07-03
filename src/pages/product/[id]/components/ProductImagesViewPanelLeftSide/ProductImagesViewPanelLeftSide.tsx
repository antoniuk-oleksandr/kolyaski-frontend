import ProductImagesViewPanelLeftSideLayout
    from "@/pages/product/[id]/components/ProductImagesViewPanelLeftSide/ProductImagesViewPanelLeftSideLayout";

type ProductImagesViewPanelLeftSideProps = {
    selectedSlideIndex: number,
    numberOfSlides: number,
}

const ProductImagesViewPanelLeftSide = (props: ProductImagesViewPanelLeftSideProps) => {
    const { selectedSlideIndex, numberOfSlides } = props

    return (
        <ProductImagesViewPanelLeftSideLayout>
            <span>{selectedSlideIndex + 1}</span>
            <span>/</span>
            <span>{numberOfSlides}</span>
        </ProductImagesViewPanelLeftSideLayout>
    )
}

export default ProductImagesViewPanelLeftSide;