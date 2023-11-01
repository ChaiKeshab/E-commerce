const initialState = {
    data: ''
}

const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'USER_SEARCH_DATA':
            return { ...state, data: action.payload }

        default:
            return initialState
    }
}

export default searchReducer