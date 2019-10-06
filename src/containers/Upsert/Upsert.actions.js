import { UPSERT } from '../store/constans'

const cancelFormRedirectToMainPage = () => ({type: UPSERT.SAGA.CANCEL_FORM});
const createNewItemData = payload => ({type: UPSERT.SAGA.CREATE_NEW_ITEM_DATA, payload});
const updateItemData = payload => ({type: UPSERT.SAGA.UPDATE_ITEM_DATA, payload});

export const UspectActions = {
    cancelFormRedirectToMainPage,
    createNewItemData,
    updateItemData
}