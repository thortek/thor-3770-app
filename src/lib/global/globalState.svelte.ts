export const counter = $state(
    { count: 0
     }
)

export const authState = $state({
    user: null,
    isAuthenticated: false
})

export function setAuthState(user: unknown, isAuthenticated: boolean) {
    authState.user = user
    authState.isAuthenticated = isAuthenticated
}