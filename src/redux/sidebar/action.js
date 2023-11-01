import * as ActionTypes from './actionTypes'

export const isOpenSidebar = (isOpen) => ({
    type: ActionTypes.IS_OPEN_SIDEBAR,
    payload: isOpen
});