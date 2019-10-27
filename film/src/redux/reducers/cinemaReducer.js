import * as ActionType from "./../constants/ActionType";

let initState = {
    listCinemas: []
};

const cinemaReducer = (state = initState, action) =>{
    switch(action.type){
        case ActionType.ON_SAVE_LIST_CINEMA:{
            let listCinemas = action.listCinema;
            return {listCinemas};
        }
        default:
            return {...state}
    }
}
export default cinemaReducer;