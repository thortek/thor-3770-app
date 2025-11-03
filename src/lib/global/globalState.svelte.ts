export const counter = $state(
    { count: 0
     }
)

export const authState = $state({
    user: null as unknown,
    isAuthenticated: false
})

export function setAuthState(user: unknown, isAuthenticated: boolean) {
    authState.user = user
    authState.isAuthenticated = isAuthenticated
}