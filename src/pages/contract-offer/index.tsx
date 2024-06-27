import ContractOfferHeader from "@/pages/contract-offer/components/ContractOfferHeader";
import ContractContent from "@/pages/contract-offer/components/ContractContent/ContractContent";
import DownloadContractButton from "@/pages/contract-offer/components/DownloadContractButton/DownloadContractButton";

const ContractOfferPage = () => {
    return (
        <>
            <ContractOfferHeader />
            <ContractContent/>
            <DownloadContractButton/>
        </>
    )
}

export default ContractOfferPage;