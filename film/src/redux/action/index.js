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
const actOnSaveListCinema = (listCinema) => {
    return {
        type: ActionType.ON_SAVE_LIST_CINEMA,
        listCinema
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
<<<<<<< HEAD

export { actOnSaveListMovie, actOnSaveListCinema, actDetailMovieAPI, actOnSaveListMovieAPI, actDetailCinemaAPI, actOnSaveListCinemaAPI };
=======
const actOnSaveListShowTimeAPI = (id) => {
    return dispatch => {
        Axios({
            method: "GET",
            url: `http://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${id}`
        })
            .then(result => {
                dispatch({
                    type: ActionType.DETAIL_CINEMA,
                    showtime: result.data
                })
            })
            .catch(err => {
                console.log(err);
            })
    }
}

// login
const actLoginAPI = (id) =>{
    return dispatch =>{
        Axios({
            method: "GET",
            url: `http://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap`
        })
        .then(result => {
            dispatch({
                type: ActionType.LOGIN,
                user: result.data
            })
        })
        .catch(err =>{
            console.log(err);
        })
    }
}

//=========end login==========
const actDetailShowTimeAPI = (id) => {
    return dispatch => {
        Axios({
            method: "GET",
            url: `http://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=${id}&maNhom=GP01`
        })
            .then(result => {
                dispatch({
                    type: ActionType.DETAIL_SHOWTIME,
                    showtime: result.data
                })
            })
            .catch(err => {
                console.log(err);
            })
    }
}
export { actOnSaveListMovie, actOnSaveListCinema, actDetailMovieAPI, actOnSaveListMovieAPI, actDetailCinemaAPI, actOnSaveListCinemaAPI, actDetailShowTimeAPI, actOnSaveListShowTimeAPI };
>>>>>>> doanphuongnhi
