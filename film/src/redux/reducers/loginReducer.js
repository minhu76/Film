import * as ActionType from "../constants/ActionType";

let initState = {
    user:{}
};

const loginReducer = (state= initState, action) => {
    switch(action.type){
        case ActionType.LOGIN:{
            console.log(action.LOGIN);
            state.user = action.LOGIN; 
            return {user};
        }
        default:
            return {...state}
    }
}

export default loginReducer;