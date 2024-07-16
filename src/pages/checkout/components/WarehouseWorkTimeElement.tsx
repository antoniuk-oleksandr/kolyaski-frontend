type WarehouseWorkTimeElementProps = {
    schedule: [string, string]
}

const WarehouseWorkTimeElement = (props: WarehouseWorkTimeElementProps) => {
    const { schedule } = props

    return (
        <div className={"flex gap-x-3"}>
            <span>{schedule[0]}:</span>
            <span>{schedule[1]}</span>
        </div>
    )
}

export default WarehouseWorkTimeElement;