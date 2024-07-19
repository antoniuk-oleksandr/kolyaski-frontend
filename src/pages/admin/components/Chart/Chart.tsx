import ChartLayout from "./ChartLayout";
import {LineChart} from "@mantine/charts";
import '@mantine/core/styles.css';
import '@mantine/charts/styles.css';

type ChartProps = {
    data: any,
    text: string,
}

const Chart = (props: ChartProps) => {
    const {data, text} = props;

    return (
        <ChartLayout>
            <p className={"text-lg pb-6"}>{text}</p>
            <LineChart
                tooltipAnimationDuration={200}
                // unit = {"грн."}
                h={300}
                data={data}
                dataKey="date"
                series={[
                    {name: 'Прибуток'},
                ]}
                curveType="monotone"
                // tickLine="x"
                // gridAxis="xy"
            />
        </ChartLayout>
    )
}

export default Chart;