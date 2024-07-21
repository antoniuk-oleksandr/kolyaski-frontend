export type TokenInfo = {
    access: TokenData,
    refresh: TokenData;
}

export type TokenData = {
    token: string,
    expiration: number,
}