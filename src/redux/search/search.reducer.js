import { SearchActionTypes } from "./search.types";

const INITIAL_STATE = {
    searchMode: false
}

const searchReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case SearchActionTypes.TOGGLE_SEARCH_MODE:
            return {
                ...state,
                searchMode: !state.searchMode
            }
        default:
            return state;
    }
}

export default searchReducer;