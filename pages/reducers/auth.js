
const initialState = {
    loggedIn: false,
};

const authReducer = (state=initialState, action) => {
    switch(action.type) {
        case 'LOGIN': {
            return {
                ...state, 
                loggedIn: action.trueFalse
            }
        }
        case 'LOGOUT': {
            return {
                ...state,
                loggedIn: action.trueFalse
            }
        }
        default: {
            return state
        }
    };
};

export default authReducer;