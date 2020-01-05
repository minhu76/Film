import React, { Component, Fragment } from 'react';
import * as action from './../redux/action/index';
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";


class DetailCinema extends Component {
    componentWillReceiveProps(nextProps) {
        if (nextProps.match.params.id !== this.props.match.params.id) {
            this.props.detailCinema(nextProps.match.params.id)
        }
    }
    componentDidMount() {
        let id = this.props.match.params.id;
        this.props.detailCinema(id);
    }
    renderTable = () => {
        return this.props.cinema.map((item, index) => {
            return (
                <Fragment key={index}>
                    <Fragment className="card container row">
                        {item.lstCumRap.map((item, index) => {
                            return (
                                <Fragment key={index}>
                                    <div className="row">
                                        <div className="card-body">
                                            <img src={require('./../img/galaxy.jpg')} />
                                            <img src={require('./../img/lotte.jpg')} />
                                            <img src={require('./../img/cns.jpg')} />
                                            <img src={require('./../img/cgv.jpg')} />
                                            <img src={require('./../img/mega.jpg')} />
                                            <h4 className="card-title">Rạp: {item.tenCumRap}</h4>
                                            <p className="card-text">Địa chỉ: {item.diaChi}</p>
                                        </div>
                                        <div>{item.danhSachPhim.map((item, index) => {
                                            return (
                                                <div className="col-sm-12" key={index}>
                                                    <div className="card-body">
                                                        <h3 className="card-title">Phim: {item.tenPhim}</h3>
                                                    </div>
                                                    <div className="row mx-0 px-0">
                                                        {item.lstLichChieuTheoPhim.map((item, index) => {
                                                            return (
                                                                <div className="card" style={{ width: '8' }} key={index}>
                                                                    <div className="card-body px-2 py-2">
                                                                        <h5>Suất chiếu: </h5>
                                                                        <p className="card-title">{new Date(item.ngayChieuGioChieu).toLocaleDateString('en-GB')}</p>
                                                                        <p className="card-title">{new Date(item.ngayChieuGioChieu).toLocaleTimeString()}</p>
                                                                        <NavLink className="btn btn-success" to={`/detail-seat/${item.maLichChieu}`}>Đặt Vé</NavLink>                                                                    </div>
                                                                </div>
                                                            )
                                                        })}
                                                    </div>
                                                </div>
                                            )
                                        })}
                                        </div>
                                    </div>
                                </Fragment>
                            )
                        })}
                    </Fragment>
                </Fragment>
            )
        })
    }

    render() {
        return (
            <div className="container my-0">
                {this.renderTable()}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        cinema: state.movieReducer.cinema
    }
}
const mapDispatchToProp = dispatch => {
    return {
        detailCinema: (id) => {
            dispatch(action.actDetailCinemaAPI(id));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProp)(DetailCinema);