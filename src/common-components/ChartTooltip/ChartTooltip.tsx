import ChartTooltipLayout from "./ChartTooltipLayout";
import {NumberFormatter} from "@mantine/core";
import {getChartTooltipValue} from "@/common-components/ChartTooltip/helpers";

type ChartTooltipProps = {
    label: string,
    payload: Record<string, any>[] | undefined,
}

const ChartTooltip = (props: ChartTooltipProps) => {
    const {payload, label} = props;

    return (
        <ChartTooltipLayout>
            <p className="font-semibold text-base mb-2">{label}</p>
            <div className="flex justify-between mb-1">
                <span className="mr-3">Прибуток:</span>
                <NumberFormatter
                    className={"font-medium"}
                    thousandSeparator={","}
                    value={getChartTooltipValue(payload)}
                />
            </div>
        </ChartTooltipLayout>
    )
}

export default ChartTooltip;