import * as ActionType from "./../constants/ActionType";

let initState = {
    seat: {}
};
const seatReducer = (state = initState, action) =>{
    switch(action.type){
        case ActionType.ON_SAVE_LIST_SEAT:{
            state.seat = action.seat;
            return {...state};
        }
        default:
            return {...state};
    }
};
export default seatReducer;