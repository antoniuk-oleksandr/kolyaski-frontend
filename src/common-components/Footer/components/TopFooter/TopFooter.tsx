import FooterPieceLayout from "@/common-components/Footer/components/FooterPieceLayout";
import TopFooterFirstColumn from "@/common-components/Footer/components/TopFooter/TopFooterFirstColumn";

const TopFooter = () => {
    return (
        <FooterPieceLayout bgColor={'bg-secondary'}>
            <TopFooterFirstColumn/>
            <div>123</div>
            <div>123</div>
        </FooterPieceLayout>
    )
}

export default TopFooter;