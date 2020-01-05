import * as ActionType from './../constants/ActionType';
import Axios from "axios";
import Swal from 'sweetalert2';


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
const actGetInforMovie = id => {
  return dispatch => {
    Axios({
      method: "GET",
      url: `http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim?MaPhim=${id}`
    })
    .then(result => {
      dispatch({
        type: ActionType.GET_INFOR_MOVIES,
        inforMovie: result.data
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
const actOptionBookAPI = (id) => {
  return dispatch => {
    Axios({
      method: "GET",
      url: `http://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${id}`
    })
      .then(result => {
        dispatch({
          type: ActionType.ON_SAVE_LIST_BOOK,
          book: result.data
        })
      })
      .catch(err => {
        console.log(err);
      })
  }
}
const actPostSignUpUser = user => {  //Đăng kí
  return dispatch => {
    Axios({
      method: "POST",
      url: "http://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy",
      data: user,
      headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoidXQyMiIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IlF1YW5UcmkiLCJuYmYiOjE1NzQ0ODU1OTgsImV4cCI6MTU3NDQ4OTE5OH0.RijLZrg1uClb-qDVQBQuZFjMj45U-HyKPIGlwClPiYI'
      }
    })
      .then(result => {
        Swal.fire(
          'Đăng kí thành công!',
          '',
          'success'
        )
      })
      .catch(err => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: `${err.response.data}`,
        })
      })
  }
}
const actGetListUser = () => {
  return dispatch => {
    Axios({
      method: "GET",
      url: "http://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP03"
    })
      .then(result => {
        dispatch({
          type: ActionType.GET_LIST_USERS,
          listUsers: result.data
        })
      })
      .catch(err => {
        console.log(err);
      })
  }
}
const actGetListRoomTicket = id => {
  return dispatch => {
    Axios({
      method: "GET",
      url: `http://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${id}`
    })
      .then(result => {
        dispatch({
          type: ActionType.GET_LIST_ROOM_TICKET,
          listRoomTicket: result.data

        })
      })
      .catch(err => {
        console.log(err);
      })
  }
}
const actGetNews = () => {
  return dispatch => {
    Axios({
      method: "GET",
      url: "http://5d78df3fa8c271001498668d.mockapi.io/api/123phim-news"
    })
    .then(result => {
      dispatch({
        type: ActionType.GET_NEWS,
        listNews: result.data
      });
    })
    .catch(err => {
      console.log(err);
    })
  }
}
const actGetNewsThumbnail = () => {
  return dispatch => {
    Axios({
      method: "GET",
      url: "http://5d78df3fa8c271001498668d.mockapi.io/api/123phim-newsThumbnail"
    })
    .then(result => {
      dispatch({
        type: ActionType.GET_NEWS_THUMBNAIL,
        listNewsThumbnail: result.data
      })
    })
    .catch(err => {
      console.log(err);
    })
  }
}
const actPostBookTicket = ticket => {
  return dispatch => {
    Axios({
      method: "POST",
      url: "http://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/DatVe",
      data: ticket,
      headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoidXQyMiIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IlF1YW5UcmkiLCJuYmYiOjE1NzQ0ODU1OTgsImV4cCI6MTU3NDQ4OTE5OH0.RijLZrg1uClb-qDVQBQuZFjMj45U-HyKPIGlwClPiYI'
      }
    })
      .then(result => {
        console.log(result);
      })
      .catch(err => {
        console.log(err);

      })
  }
}

export { actOnSaveListMovieAPI, actGetListUser, actPostSignUpUser, actOnSaveListMovie, actOnSaveListCinema, actDetailMovieAPI, actGetInforMovie, actDetailCinemaAPI, actOnSaveListCinemaAPI, actOnSaveListSeatAPI, actOptionBookAPI, actGetListRoomTicket,actGetNews, actGetNewsThumbnail, actPostBookTicket };

