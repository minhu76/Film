import * as ActionType from './../constants/ActionType';
import Axios from "axios";


const actOnSaveListMovieAPI = () => {
    return dispatch => {
        Axios({
            method: "GET",
            url: "http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01"
        })
            .then(result => {
                dispatch(actOnSaveListMovie(result.data));
            })
            .catch(err => {
                console.log(err);
            })
    }
}
const actOnSaveListCinemaAPI = () => {
    return dispatch => {
        Axios({
            method: "GET",
            url: "http://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinHeThongRap"
        })
            .then(result => {
                dispatch(actOnSaveListCinema(result.data));
            })
            .catch(err => {
                console.log(err);
            })
    }
}

const actOnSaveListMovie = (listMovie) => {
    return {
        type: ActionType.ON_SAVE_LIST_MOVIE,
        listMovie
    }
      
}
const actOnSaveListCinema = (listCinemas) => {
    return {
        type: ActionType.ON_SAVE_LIST_CINEMA,
        listCinemas
    }
}
const actDetailMovieAPI = (id) => {
    return dispatch => {
        Axios({
            method: "GET",
            url: `http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim?MaPhim=${id}`
        })
            .then(result => {
                dispatch({
                    type: ActionType.DETAIL_MOVIE,
                    movie: result.data
                })
            })
            .catch(err => {
                console.log(err);
            })
    }
}
const actDetailCinemaAPI = (id) => {
    return dispatch => {
        Axios({
            method: "GET",
            url: `http://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=${id}&maNhom=GP01`
        })
            .then(result => {
                dispatch({
                    type: ActionType.DETAIL_CINEMA,
                    cinema: result.data
                })
            })
            .catch(err => {
                console.log(err);   
            })
    }
}
const actOnSaveListSeatAPI = (id) => {
    return dispatch => {
        Axios({
            method: "GET",
            url: `http://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${id}`
        })
            .then(result => {
                dispatch({
                    type: ActionType.ON_SAVE_LIST_SEAT,
                    seat: result.data
                })
            })
            .catch(err => {
                console.log(err);
            })
    }
}

export { actOnSaveListMovie, actOnSaveListCinema, actDetailMovieAPI, actOnSaveListMovieAPI, actDetailCinemaAPI, actOnSaveListCinemaAPI, actOnSaveListSeatAPI };

