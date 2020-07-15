
const initialState = {
    currentUser: false,
};

const authReducer = (state=initialState, action) => {
    switch(action.type) {
        case 'LOGIN': {
            return {
                ...state, 
                currentUser: action.trueFalse
            }
        }
        default: {
            return state
        }
    };
};

export default authReducer;