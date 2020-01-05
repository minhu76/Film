import React, { Component } from 'react';
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import * as action from "../../redux/action/index";

class ToolBook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      idMovie: null,
     
      movie: "",
      theater: "",
      date: "",
      time: "",
      isShowTypeDropDowns: "",
      isToggleDropDowns: false
    };
  }
  componentDidMount() {
    this.props.getListMovie();
  }
  handleDropdowns = (dropdowns, idMovie) => {
    let isShowTypeDropDowns = "";
    let isToggleDropDowns = !this.state.isToggleDropDowns
    switch (dropdowns) {
      case "Movies":
        isShowTypeDropDowns = "Movies";
        break;
      case "Cinemas":
        isShowTypeDropDowns = "Cinemas";
        break;
      case "Date":
        isShowTypeDropDowns = "Date";
        break;
      case "Time":
        isShowTypeDropDowns = "Time";
        break;
      default:
        break;
    }
    if (idMovie) {
      this.props.getInforMovie(idMovie);
    }
    this.setState({
      isShowTypeDropDowns,
      isToggleDropDowns
    })
  };
  handleChooseDropdowns = (displayDropdowns, typeDropDowns) => {
    switch (typeDropDowns) {
      case "Movies":
        let { listMovies } = this.props;
        if (listMovies) {
          let index = listMovies.findIndex(item => {
            return item.tenPhim === displayDropdowns;
          });
          this.props.getInforMovie(listMovies[index].maPhim)
        }
        this.setState({
          movie: displayDropdowns,
          isToggleDropDowns: false,
          theater: "",
          date: "",
          time: "",
        });
        break;
      case "Cinemas":
        this.setState({
          theater: displayDropdowns,
          isToggleDropDowns: false,
          date: "",
          time: "",
        });
        break;
      case "Date":
        this.setState({
          date: displayDropdowns,
          isToggleDropDowns: false,
          time: "",
        })
        break;
      case "Time":
        this.setState({
          time: displayDropdowns,
          isToggleDropDowns: false
        })
        break;
      default:
        break;
    }
  };
  renderDropdowns = () => {
    let listShowDropDowns = [];  
    let { listMovies, inforMovie } = this.props;
    let { isShowTypeDropDowns, movie, theater, date } = this.state;
    let typeDropDowns = "";
    switch (isShowTypeDropDowns) {
      case "Movies":
        typeDropDowns = "Movies";
        for (let item of listMovies) {
          listShowDropDowns.push(item.tenPhim);
        }
        break;
      case "Cinemas":
        if (movie !== "") {
          typeDropDowns = "Cinemas";
          if (inforMovie.hasOwnProperty("lichChieu")) {
            for (let itemInforMovie of inforMovie.lichChieu) {
              let index = listShowDropDowns.findIndex(item => {
                return item === itemInforMovie.thongTinRap.tenCumRap
              })
              if (index === -1) {
                listShowDropDowns.push(itemInforMovie.thongTinRap.tenCumRap)
              }
            }
          }
        }
        else {
          listShowDropDowns.push("Vui lòng chọn phim");
        }
        break;
      case "Date":
        if ((movie !== "") && (theater !== "")) {
          typeDropDowns = "Date";
          if (inforMovie.hasOwnProperty("lichChieu")) {
            let listDayTimeMovies = [];
            for (let item of inforMovie.lichChieu) {
              if (item.thongTinRap.tenCumRap === this.state.theater) {
                listDayTimeMovies.push(item.ngayChieuGioChieu);
              }
            }
            for (let itemDayTimeMovies of listDayTimeMovies) {
              let index = listShowDropDowns.findIndex(item => {
                return item === new Date(itemDayTimeMovies).toLocaleDateString()
              })
              if (index === -1) {
                listShowDropDowns.push(new Date(itemDayTimeMovies).toLocaleDateString())
              }
            }
          }
        } else {
          listShowDropDowns.push("Vui lòng chọn phim và rạp");
        }
        break;
      case "Time":
        if ((movie !== "") && (theater !== "") && (date !== "")) {
          typeDropDowns = "Time";
          if (inforMovie.hasOwnProperty("lichChieu")) {
            let listDayTimeMovies = []
            for (let item of inforMovie.lichChieu) {
              if (item.thongTinRap.tenCumRap === this.state.theater) {
                listDayTimeMovies.push(item.ngayChieuGioChieu);
              }
            }
            for (let itemDayTimeMovies of listDayTimeMovies) {
              if (new Date(itemDayTimeMovies).toLocaleDateString() === this.state.date) {
                listShowDropDowns.push(new Date(itemDayTimeMovies).toLocaleTimeString())
              }
            }
          }
        } else {
          listShowDropDowns.push("Vui lòng chọn phim và rạp và ngày xem");
        }
        break;
      default:
        break;
    }
    if (listShowDropDowns.length > 0) {
      return listShowDropDowns.map((item, index) => {
        return (
          <Link
            className="dropdown-item"
            key={index}
            to=""
            onClick={() => this.handleChooseDropdowns(item, typeDropDowns)}
          >
            {item}
          </Link>
        );
      })
    }
  };

  handleLinkToCheckout = () => {
    let { movie, theater, date, time } = this.state;
    let { inforMovie } = this.props;
    if(inforMovie.lichChieu && movie && theater && date && time){
      let index = inforMovie.lichChieu.findIndex(item => {
        return ((date === new Date(item.ngayChieuGioChieu).toLocaleDateString()) && (time === new Date(item.ngayChieuGioChieu).toLocaleTimeString()) && (item.thongTinRap.tenCumRap === theater) )
      })
      window.location.href = `/detail-seat/${inforMovie.lichChieu[index].maLichChieu}`;
    }
  }

  render() {
    let { movie, theater, date, time, isShowTypeDropDowns, isToggleDropDowns } = this.state;
    return (
      <div className="homeTools myContainer d-lg-block d-none">
        <ul className="d-flex align-items-center justify-content-between">
          <li className="dropdown">
            <button
              className="btn dropdown-toggle"
              type="button"
             
              aria-haspopup="true"
              aria-expanded="false"
              data-flip="false"
              onClick={() => this.handleDropdowns("Movies", this.state.idMovie)}

            >
              <span>{this.state.movie ? this.state.movie : "Movies"}</span>
            </button>
            <div className={`dropdown-menu ${((isShowTypeDropDowns === "Movies") && (isToggleDropDowns)) ? "show" : ""}`} aria-labelledby="dropdownMenuPhim">
              {this.renderDropdowns()}
            </div>
          </li>
          <li className="dropdown">
            <button
              className="btn dropdown-toggle"
              type="button"
             
              aria-haspopup="true"
              aria-expanded="false"
              data-flip="false"
              onClick={() => this.handleDropdowns("Cinemas", this.state.idMovie)}
            >
              <span>{this.state.theater ? this.state.theater : "Cinemas"}</span>
            </button>
            <div className={`dropdown-menu ${((isShowTypeDropDowns === "Cinemas") && (isToggleDropDowns)) ? "show" : ""}`} aria-labelledby="dropdownMenuPhim">
              {this.renderDropdowns()}
            </div>
          </li>
          <li className="dropdown">
            <button
              className="btn dropdown-toggle"
              type="button"    
              aria-haspopup="true"
              aria-expanded="false"
              data-flip="false"
              onClick={() => this.handleDropdowns("Date", this.state.idMovie)}
            >
              <span>{this.state.date ? this.state.date : "Date"}</span>
            </button>
            <div className={`dropdown-menu ${((isShowTypeDropDowns === "Date") && (isToggleDropDowns)) ? "show" : ""}`} aria-labelledby="dropdownMenuPhim">
              {this.renderDropdowns()}
            </div>
          </li>
          <li className="dropdown">
            <button
              className="btn dropdown-toggle"
              type="button"
              aria-haspopup="true"
              aria-expanded="false"
              data-flip="false"
              onClick={() => this.handleDropdowns("Time", this.state.idMovie)}
            >
              <span>{this.state.time ? this.state.time : "Time"}</span>
            </button>
            <div className={`dropdown-menu ${((isShowTypeDropDowns === "Time") && (isToggleDropDowns)) ? "show" : ""}`} aria-labelledby="dropdownMenuPhim">
              {this.renderDropdowns()}
            </div>
          </li>
          <li>
            <button className="btn" style={{ backgroundColor: `${(movie && theater && date && time) ? "#fb4226" : "#4a4a4a"}` }} onClick={this.handleLinkToCheckout} >BOOK NOW</button>
          </li>
        </ul>
      </div>
    );
  }
}
const mapStateToDrops = state => {
  return {
    listMovies: state.movieReducer.listMovies,
    inforMovie: state.movieReducer.inforMovie
  };
};
const mapDispatchToDrops = dispatch => {
  return {
    getListMovie: () => {
      dispatch(action.actOnSaveListMovieAPI());
    },
    getInforMovie: id => {
      dispatch(action.actGetInforMovie(id));
    }
  };
};
export default connect(mapStateToDrops, mapDispatchToDrops)(ToolBook);