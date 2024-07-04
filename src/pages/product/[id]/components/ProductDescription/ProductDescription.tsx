import ProductDescriptionLayout from "./ProductDescriptionLayout";

type ProductDescriptionProps = {
    description: string;
}

const ProductDescription = (props: ProductDescriptionProps) => {
    const { description } = props;

    return (
        <ProductDescriptionLayout>
            <div className={"product-description"} dangerouslySetInnerHTML={{__html: description}}/>
        </ProductDescriptionLayout>
    )
}

export default ProductDescription;