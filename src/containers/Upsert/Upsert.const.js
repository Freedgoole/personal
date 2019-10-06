const pr = 'UPSERT_'

const PAGES = {
    UPSERT: 'upsert'
}
const ROUTES = {
    UPSERT: `/${PAGES.UPSERT}`
}
const SAGA = {
    CANCEL_FORM: `${pr}CANCEL_FORM:`,
    CREATE_NEW_ITEM_DATA: `${pr}CREATE_NEW_ITEM_DATA:`,
    UPDATE_ITEM_DATA: `${pr}UPDATE_ITEM_DATA`
}
export const UPSERT = {
    ROUTES,
    SAGA
};