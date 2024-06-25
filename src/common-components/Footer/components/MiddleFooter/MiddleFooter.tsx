import FooterPieceLayout from "@/common-components/Footer/components/FooterPieceLayout";
import MiddleFooterFirstColumn from "@/common-components/Footer/components/MiddleFooter/MiddleFooterFirstColumn";
import FooterSocialMediaButtons
    from "@/common-components/Footer/components/MiddleFooter/FooterSocialMediaButtons/FooterSocialMediaButtons";
import MiddleFooterThirdColumn from "@/common-components/Footer/components/MiddleFooter/MiddleFooterThirdColumn";
import MiddleFooterSecondColumn from "@/common-components/Footer/components/MiddleFooter/MiddleFooterSecondColumn";

const MiddleFooter = () => {
    return (
        <>
            <FooterPieceLayout bgColor={'bg-primary'}>
                <MiddleFooterFirstColumn/>
                <MiddleFooterSecondColumn/>
                <MiddleFooterThirdColumn/>
                <FooterSocialMediaButtons/>
            </FooterPieceLayout>
        </>
    )
}

export default MiddleFooter;