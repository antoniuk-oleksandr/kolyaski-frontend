import DownloadContractButtonLayout from "./DownloadContractButtonLayout";

const DownloadContractButton = () => {
    return (
        <DownloadContractButtonLayout>
            <a href={"/договір-оферта.doc"} download={"договір-оферта.doc"}>
                <button
                    className={"bg-primary text-white hover:bg-white hover:text-neutral-600 duration-200 ease-out text-xl px-4 py-3 font-semibold rounded-md active:scale-95 outline-none"}
                >Скачати договір</button>
            </a>
        </DownloadContractButtonLayout>
    )
}

export default DownloadContractButton;