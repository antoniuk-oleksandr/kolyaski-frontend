export const getChartTooltipValue = (payload: Record<string, any>[] | undefined) => {
    if(!payload || payload.length === 0) return 0;
    else return payload[0].payload.profit;
}