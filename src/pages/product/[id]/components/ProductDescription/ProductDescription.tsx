import ProductDescriptionLayout from "./ProductDescriptionLayout";

type ProductDescriptionProps = {
    description: string;
}

const ProductDescription = (props: ProductDescriptionProps) => {
    const { description } = props;

    return (
        <ProductDescriptionLayout>
            <div dangerouslySetInnerHTML={{__html: description}}/>
        </ProductDescriptionLayout>
    )
}

export default ProductDescription;