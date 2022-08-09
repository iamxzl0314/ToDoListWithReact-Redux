import { ADD, DELETE, CHANGESTATUS, CHANGEALL, DELETEALLDONE } from './constant'
export const createAddAction = (data) => { return { type: ADD, data: data } }
export const createDeleteAction = (data) => { return { type: DELETE, data: data } }
export const createChangeStatusAction = (data) => {
    return {
        type: CHANGESTATUS, data: data
    }
}
export const craeteChangeAllAtion = (data) => {
    return {
        type: CHANGEALL, data: data
    }
}
export const createDeleteAllDoneAction = (data) => {
    return { type: DELETEALLDONE, data: data }
}