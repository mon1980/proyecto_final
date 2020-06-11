const categoryReducer = (state = {}, action) => {
    switch (action.type) {
        case 'GET_ALL_PRECIOS':
            return {
                ...state,
                precios: action.payload
            }

        default:
            return state;
    }
}
export default categoryReducer;