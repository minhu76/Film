import {combineReducers} from 'redux';
import movieReducer from './movieReducer';
import cinemaReducer from './cinemaReducer';
//store tổng ứng dụng 
const rootReducer = combineReducers({
    cinemaReducer,
    movieReducer
    //Nơi sẽ chứa các reducer cho nghiệp vụ (store con)
})
export default rootReducer;