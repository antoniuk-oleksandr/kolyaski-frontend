import TopFooterFirstColumnHeader
    from "@/common-components/Footer/components/TopFooter/TopFooterFirstColumnHeader/TopFooterFirstColumnHeader";

const TopFooterFirstColumn = () => {
    return (
        <>
            <TopFooterFirstColumnHeader/>
            <p className={"text-primary"}>Здійснюється в межах України поштовим оператором Нова Пошта. Інші способи доставки оговорюються
                індивідуально.</p>
            <p className={"text-primary"}>Термін доставки 1-3 дні </p>
        </>
    )
}

export default TopFooterFirstColumn;