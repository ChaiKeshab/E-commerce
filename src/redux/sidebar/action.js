import * as ActionTypes from './actionTypes'

export const isOpenSidebarCart = (isOpen) => ({
    type: ActionTypes.IS_OPEN_SIDEBAR_CART,
    payload: isOpen
});

export const isOpenSidebarCategory = (isOpen) => ({
    type: ActionTypes.IS_OPEN_SIDEBAR_CATEGORY,
    payload: isOpen
});
export const isOpenSidebarNotification = (isOpen) => ({
    type: ActionTypes.IS_OPEN_SIDEBAR_NOTIFICATION,
    payload: isOpen
});