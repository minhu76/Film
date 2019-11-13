import * as ActionType from "./../constants/ActionType";

let initState = {
    listCinemas: []
 
};

const cinemaReducer = (state = initState, action) =>{
    switch(action.type){
        case ActionType.ON_SAVE_LIST_CINEMA:{
            state.listCinemas = action.listCinemas;
            return {...state};
        }
        
        default:
            return {...state}
    }
}
export default cinemaReducer;