const pr = 'LOGIN_'

const ROUTES = {
    LOGIN: `/login`
}
const STORE = {
    LOGIN_STATUS: `${pr}_STATUS`,
    LOGIN_DATA: `${pr}_DATA`,
}
const SAGA = {
    LOGIN_AUTHORIZATION: `${pr}AUTHORIZATION`
}
export const LOGIN = {
    ROUTES, 
    STORE,
    SAGA
};