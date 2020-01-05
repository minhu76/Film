import * as ActionType from "./../constants/ActionType";

let initState = {
    listMovies: [],
    movie: {},
    cinema: [],
    book: {},
    listUsers: [],
    inforMovie: [],
    listNewsThumbnail: [],
    listNews: [],
    listRoomTicket: {}
};
const movieReducer = (state = initState, action) => {
    switch (action.type) {
        case ActionType.ON_SAVE_LIST_MOVIE: {
            state.listMovies = action.listMovie;
            return { ...state };
        }
        case ActionType.GET_INFOR_MOVIES: {
            state.inforMovie = action.inforMovie;
            return { ...state };
        }
        case ActionType.DETAIL_MOVIE: {
            state.movie = action.movie;
            return { ...state }
        }
        case ActionType.DETAIL_CINEMA: {
            state.cinema = action.cinema;
            return { ...state }
        }
        case ActionType.ON_SAVE_LIST_BOOK: {
            state.book = action.book;
            return { ...state }
        }
        case ActionType.GET_LIST_USERS: {
            state.listUsers = action.listUsers;
            return { ...state };
        }
        case ActionType.GET_NEWS_THUMBNAIL: {
            state.listNewsThumbnail = action.listNewsThumbnail;
            return { ...state };
        }
        case ActionType.GET_NEWS:{
            state.listNews = action.listNews;
            return { ...state }
        }
        case ActionType.GET_LIST_ROOM_TICKET: {
            state.listRoomTicket = action.listRoomTicket;
            return { ...state };
        }
        default:
            return { ...state };
    }
};
export default movieReducer;