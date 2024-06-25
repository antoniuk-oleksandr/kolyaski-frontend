import FooterPieceLayout from "@/common-components/Footer/components/FooterPieceLayout";
import TopFooterFirstColumn from "@/common-components/Footer/components/TopFooter/TopFooterFirstColumn";
import TopFooterSecondColumn from "@/common-components/Footer/components/TopFooter/TopFooterSecondColumn";
import TopFooterThirdColumn from "@/common-components/Footer/components/TopFooter/TopFooterThirdColumn";

const TopFooter = () => {
    return (
        <FooterPieceLayout bgColor={'bg-secondary'}>
            <TopFooterFirstColumn/>
            <TopFooterSecondColumn/>
            <TopFooterThirdColumn/>
        </FooterPieceLayout>
    )
}

export default TopFooter;