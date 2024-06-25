import TopFooterSecondColumnHeader
    from "@/common-components/Footer/components/TopFooter/TopFooterSecondColumnHeader/TopFooterSecondColumnHeader";
import TopFooterThirdColumnHeader
    from "@/common-components/Footer/components/TopFooter/TopFooterThirdColumnHeader/TopFooterThirdColumnHeader";

const TopFooterFirstColumn = () => {
    return (
        <>
            <TopFooterThirdColumnHeader/>
            <p className={"text-primary"}>Ви можете повернути товар протягом 14 днів від дати отримання замовлення.</p>
            <p className={"text-primary"}>Повернення можливо тільки для тих товарів, які не були у використанні та збережений товарний вигляд.</p>
        </>
    )
}

export default TopFooterFirstColumn;