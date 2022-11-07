import TSON from "typescript-json"

export type ApiRequest = {
    requiredStr: string
    optionalNum?: number
    optionalStrUnion?: "format-a" | "format-b"
}

// this cannot be wrapped as the code must contain an explicit "TSON.is<YOURTYPE>()" somewhere to be compiled correctly
export const isApiRequest = (input: ApiRequest | unknown) => TSON.is<ApiRequest>(input)
