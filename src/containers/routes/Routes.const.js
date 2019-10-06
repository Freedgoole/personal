const pr = 'ROUTES_'

export const NAVIGATION_PATH = {
    LOGIN: `/login`
}

export const ROUTES = {
    IS_AUTHENTICATED: `${pr}IS_AUTHENTICATED`,
    NAVIGATE_SAGA: `${pr}NAVIGATE_SAGA`, // redirect to
    SET_HEADER_PATH: `${pr}SET_HEADER_PATH`,
    SET_LOCATION: `${pr}SET_LOCATION`
}
