
export const search = (searchData) => {
    return (dispatch) => {
        dispatch({
            type: 'USER_SEARCH_DATA',
            payload: searchData,
        })
    }
}

//this is the method when not using middlewares since it's synchronous action
// export const setUserSearchData = (data) => {
//     return {
//         type: 'USER_SEARCH_DATA',
//         payload: data,
//     };
// };