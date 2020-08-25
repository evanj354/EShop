import { useReducer } from "react";


const initialState = {
    searchField: "",
    currentItems: {resultsLeft: [], resultsRight: []},
};

const searchReducer = (state=initialState, action) => {

    switch(action.type) {
        case 'UPDATE': {
            console.log('REDUX UPDATING, ', action.payload.items);
            
            return { 
                searchField: action.payload.searchField,
                currentItems: [action.payload.items] 
            }
        }
        default: {
            console.log('BAD');
            return state;
        }
    }
}

export default searchReducer;