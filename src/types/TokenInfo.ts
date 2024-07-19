export type TokenInfo = {
    access: {
        token: string,
        expiration: number,
    },
    refresh: {
        token: string,
        expiration: number,
    }
}