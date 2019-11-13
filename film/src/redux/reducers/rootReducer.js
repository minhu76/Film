import {combineReducers} from 'redux';
import movieReducer from './movieReducer';
import cinemaReducer from './cinemaReducer';
import seatReducer from './seatReducer';
//store tổng ứng dụng 
const rootReducer = combineReducers({
    seatReducer,
    cinemaReducer,
    movieReducer
    //Nơi sẽ chứa các reducer cho nghiệp vụ (store con)
})
export default rootReducer;