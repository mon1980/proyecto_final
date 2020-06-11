const userReducer = (state = {}, action) => {
    switch (action.type) {
        case 'LOGIN':
        case 'LOGOUT':
            return {
                ...state,
                user: action.payload
            }
        case 'GET_ALL_USERS':
            return {
                ...state,
                users: action.payload
            }

        case 'GET_USER_INFO':
                return {
                    ...state,
                    user: action.payload
                }

        case 'SET_USER':
                return {
                    ...state,
                    user: action.payload
                    }
        
    
            default:
                return state;
    }
};
export default userReducer;