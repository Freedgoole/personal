import { MAIN } from '../store/constans'

const getDataAll = () => ({type: MAIN.SAGA.GET_DATA});
const editDataItem = payload => ({type: MAIN.SAGA.EDIT_ITEM_DATA, payload})
const createNewItem = () => ({type: MAIN.SAGA.CREATE_NEW_ITEM});
const deleteDataItem = payload => ({type: MAIN.SAGA.DELETE_ITEM, payload});
const setSelectedItem = payload => ({type: MAIN.STORE.SELECTED_ITEM, payload})

export const MainActions = {
    getDataAll,
    editDataItem,
    deleteDataItem,
    createNewItem,
    setSelectedItem
}