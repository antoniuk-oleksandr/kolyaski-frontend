import SoldOutOverlayLayout from "./SoldOutOverlayLayout";

type SoldOutOverlayProps = {
    quantity: number,
}

const SoldOutOverlay = (props: SoldOutOverlayProps) => {
    const {quantity} = props;

    if (quantity > 0) return null;
    return (
        <SoldOutOverlayLayout>
            <span className="text-white text-lg font-bold z-10">Немає в наявності</span>
            <div className="absolute inset-0 bg-white opacity-30"></div>
        </SoldOutOverlayLayout>
    )
}

export default SoldOutOverlay;