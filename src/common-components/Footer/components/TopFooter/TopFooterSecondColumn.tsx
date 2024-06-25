import TopFooterSecondColumnHeader
    from "@/common-components/Footer/components/TopFooter/TopFooterSecondColumnHeader/TopFooterSecondColumnHeader";

const TopFooterFirstColumn = () => {
    return (
        <>
            <TopFooterSecondColumnHeader/>
            <p className={"text-primary"}>Безготівковий розрахунок: Visa, MasterCard, Liqpay.</p>
            <p className={"text-primary"}>Готівковий розрахунок: наложений платіж з попередньої передплатою.</p>
        </>
    )
}

export default TopFooterFirstColumn;