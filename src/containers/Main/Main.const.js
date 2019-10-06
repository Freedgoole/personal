const pr = 'MAIN_'

const ROUTES = {
    MAIN: `/`
}
const STORE = {
    MAIN_DATA: `${pr}MAIN_DATA`,
    SELECTED_ITEM:`${pr}SELECTED_ITEM`,
}
const SAGA = {
    GET_DATA: `${pr}GET_DATA`,
    EDIT_ITEM_DATA: `${pr}EDIT_ITEM_DATA`,
    CREATE_NEW_ITEM: `${pr}CREATE_NEW_ITEM`,
    DELETE_ITEM: `${pr}DELETE_ITEM`,
    SET_SELECTED_ITEM: `${pr}SET_SELECTED_ITEM`
}
export const MAIN = {
    ROUTES, 
    STORE,
    SAGA
};