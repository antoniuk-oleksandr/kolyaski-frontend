import ChartLayout from "./ChartLayout";
import {AreaChart} from "@mantine/charts";
import '@mantine/charts/styles.css';
import '@mantine/core/styles.css';
import ChartTooltip from "@/common-components/ChartTooltip/ChartTooltip";

type ChartProps = {
    data: any;
    text: string;
};

const Chart = (props: ChartProps) => {
    const {text, data} = props;

    const tooltip = (props : {payload: any, label: any}) => {
        return <ChartTooltip {...props}/>
    }

    return (
        <ChartLayout>
            <p className="text-lg pb-6">{text}</p>
            <AreaChart
                tooltipAnimationDuration={200}
                h={280}
                data={data}
                dataKey="date"
                series={[
                    {name: 'profit', color: "blue"},
                ]}
                valueFormatter={(value) => new Intl.NumberFormat('en-US').format(value)}
                connectNulls
                curveType="monotone"
                gridAxis="none"
                tooltipProps={{
                    content: ({payload, label}) => tooltip({payload, label}),
                }}
            />
        </ChartLayout>
    );
};

export default Chart;
