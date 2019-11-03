import * as ActionType from "./../constants/ActionType";

let initState = {
    listMovies: [],
    movie: {},
    cinema: []
};
const movieReducer = (state = initState, action) =>{
    switch(action.type){
        case ActionType.ON_SAVE_LIST_MOVIE:{
            state.listMovies = action.listMovie;
            return {...state};
        }
        case ActionType.ON_SAVE_LIST_CAROUSEL:{
            state.listMovies = action.listMovie;
            return {...state};
        }
        case ActionType.DETAIL_MOVIE:{
            state.movie = action.movie;
            return {...state}
        }
        case ActionType.DETAIL_CINEMA:{
            state.cinema = action.cinema;
            return {...state}
        }
           
        default:
            return {...state};
    }
};
export default movieReducer;