import React, { Component } from 'react';
import * as action from './../redux/action/index';
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

class DetailMovie extends Component {
    componentDidMount() {
        let id = this.props.match.params.id;
        this.props.detailMovie(id);
    }
    renderTable = () => {
        let { movie } = this.props;
        if (movie.lichChieu) {
            return movie.lichChieu.map((item, index) => {
                return (
                    <tr key={index}>
                        <td>{item.thongTinRap.tenCumRap}</td>
                        <td>{item.thongTinRap.tenRap}</td>
                        <td>{new Date(item.ngayChieuGioChieu).toLocaleDateString()}</td>
                        <td>{new Date(item.ngayChieuGioChieu).toLocaleTimeString()}</td>
                        <td>{item.thoiLuong}phút</td>
                        <td>{item.giaVe}</td>
                        <td>
                            <NavLink className="btn btn-success" to={`/detail-seat/${item.maLichChieu}`}>Đặt Vé</NavLink>
                        </td>
                    </tr>
                )
            })
        }
    }
    render() {
        let { movie } = this.props;
        return (
            <div className="container-fluid pt-5">
                <div className="row">
                    <div className="col-sm-6">
                        <img src={movie.hinhAnh} alt="" />
                    </div>
                    <div className="col-sm-6">
                        <table className="table">
                            <tbody>
                                <tr>
                                    <td>Tên Phim</td>
                                    <td>{movie.tenPhim}</td>
                                </tr>
                                <tr>
                                    <td>Mô Tả</td>
                                    <td>{movie.moTa}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12">
                        <table className="table">
                            <thead>
                                <tr>
                                    <td>Cụm Rạp</td>
                                    <td>Tên Rạp</td>
                                    <td>Ngày Chiếu</td>
                                    <td>Giờ Chiếu</td>
                                    <td>Thời Lượng</td>
                                    <td>Giá Vé</td>
                                    <td>Đặt Ngay</td>
                                </tr>
                            </thead>
                            <tbody>
                                {this.renderTable()}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        movie: state.movieReducer.movie
    }
}
const mapDispatchToProp = dispatch => {
    return {
        detailMovie: (id) => {
            dispatch(action.actDetailMovieAPI(id));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProp)(DetailMovie);