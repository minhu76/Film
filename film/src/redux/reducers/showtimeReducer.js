import * as ActionType from "./../constants/ActionType";

let initState = {
    showTimes: []
 
};

const showtimeReducer = (state = initState, action) =>{
    switch(action.type){
        case ActionType.ON_SAVE_LIST_SHOWTIME:{
            state.showTimes = action.showtime;
            return {...state};
        }
        case ActionType.DETAIL_SHOWTIME:{
            state.showTimes = action.showtime;
            return {...state};
        }
        default:
            return {...state}
    }
}
export default showtimeReducer;