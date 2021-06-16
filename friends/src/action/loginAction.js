export const LOGGING_IN = 'LOGGING_IN'

export function loggingIn( credentials ) {
    return{type: LOGGING_IN, payload:credentials}
}