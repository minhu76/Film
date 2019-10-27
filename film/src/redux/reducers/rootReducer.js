import {combineReducers} from 'redux';
import movieReducer from './movieReducer';

//store tổng ứng dụng 
const rootReducer = combineReducers({
    movieReducer
    //Nơi sẽ chứa các reducer cho nghiệp vụ (store con)
})
export default rootReducer;