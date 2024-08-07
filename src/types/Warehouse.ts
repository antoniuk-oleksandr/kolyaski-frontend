export type Warehouse = {
    warehouse: string,
    schedule: {
        [key: string]: string
    } | null,
}