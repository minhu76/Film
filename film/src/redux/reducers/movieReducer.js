import * as ActionType from "./../constants/ActionType";

let initState = {
    listMovies: []
};
const movieReducer = (state = initState, action) =>{
    switch(action.type){
        case ActionType.ON_SAVE_LIST_MOVIE:{
            let listMovies = action.listMovie;
            return {listMovies};
        }
        case ActionType.ON_SAVE_LIST_CAROUSEL:{
            let listCarousels = action.listMovie;
            return {listCarousels};
        }
        default:
            return {...state};
    }
};
export default movieReducer;