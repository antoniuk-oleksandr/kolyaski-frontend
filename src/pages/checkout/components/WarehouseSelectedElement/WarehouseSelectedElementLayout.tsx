import {LayoutProps} from "@/types/LayoutProps";
import {Dispatch, SetStateAction} from "react";
import {Box, LoadingOverlay} from "@mantine/core";

type WarehouseSelectedElementLayoutProps = LayoutProps & {
    setIsMenuShown: Dispatch<SetStateAction<boolean>>,
    setWarehouseElement: Dispatch<SetStateAction<HTMLDivElement | null>>,
    isErrorPresent: boolean,
    isWarehouseRequestSending: boolean,
};

const WarehouseSelectedElementLayout = (props: WarehouseSelectedElementLayoutProps) => {
    const {children, setIsMenuShown, setWarehouseElement, isErrorPresent, isWarehouseRequestSending} = props;

    return (
        <Box pos="relative" className={"rounded-md"}>
            <div
                ref={(ref) => setWarehouseElement(ref)}
                onClick={() => !isWarehouseRequestSending && setIsMenuShown((prev) => !prev)}
                className={`px-3 relative flex justify-between items-center rounded-md py-2 bg-white w-full ring-1  outline-none text-sm duration-1000 ease-out
                ${isWarehouseRequestSending ? '' : 'cursor-pointer'}
                ${isErrorPresent ? 'ring-red-500 hover:ring-red-500' : `ring-neutral-200 ${isWarehouseRequestSending ? '' : 'hover:ring-primary'} `}`}
            >
                <LoadingOverlay
                    className={"rounded-md"}
                    visible={isWarehouseRequestSending}
                    loaderProps={{children: 'Зачекайте будь ласка...'}}
                />
                {children}
            </div>
        </Box>

    )
}

export default WarehouseSelectedElementLayout;