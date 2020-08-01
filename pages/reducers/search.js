import { useReducer } from "react";


const initialState = {
    searchField: "",
    currentItems: [],
};

const searchReducer = (state=initialState, action) => {
    switch(action.type) {
        case 'UPDATE': {
            return { 
                searchField: action.payload.searchField,
                currentItems: [...action.payload.items] 
            }
        }
        default: return state;
    }
}

export default searchReducer;