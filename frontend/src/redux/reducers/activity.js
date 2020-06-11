const activityReducer = (state = {}, action) => {
    switch (action.type) {
        case 'GET_ALL_ACTIVITIES':
            return {
                ...state,
                activities: action.payload
            }

        default:
            return state;
    }
}
export default activityReducer;