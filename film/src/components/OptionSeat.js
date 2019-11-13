import React, { Component } from 'react';
import * as action from './../redux/action/index';
import { connect } from "react-redux";
import _bookseat from './../SCSS/Components/Book/_bookseat.scss';

class OptionSeat extends Component {

    componentDidMount() {
        let id = this.props.match.params.id;
        this.props.detailSeat(id);
    }
    renderTable = () => {
        if (this.props.seat.danhSachGhe) {
            return this.props.seat.danhSachGhe.map((item, index) => {
                if (item.daDat) {
                    return (
                        <div className="card" style={{ width: '5rem' }} key={index}>
                            <div className="list-group list-group-flush">
                                <button className="list-group-item" disabled>{item.tenGhe}</button>
                            </div>
                        </div>
                    )
                } else {
                    return (
                        <div className="card" style={{ width: '5rem' }} key={index}>
                            <div className="list-group list-group-flush">
                                <button className="list-group-item seat-active">{item.tenGhe}</button>
                            </div>
                        </div>
                    )
                }
            })
        }
    }

    renderItem = () => {
        let { seat } = this.props;
        console.log(seat.thongTinPhim);
        if (seat.thongTinPhim) {
            return (
                <div className="card" style={{ width: '18rem' }}>
                    <img src={seat.thongTinPhim.hinhAnh} className="card-img-top" alt="..." height={320} />
                    <div className="card-body">
                        <h4 className="card-title">{seat.thongTinPhim.tenPhim}</h4>
                        <h6 className="card-text">{seat.thongTinPhim.tenCumRap} | {seat.thongTinPhim.tenRap}</h6>
                        <p>Địa chỉ: {seat.thongTinPhim.diaChi}</p>
                        <h6>Ngày chiếu: {new Date(seat.thongTinPhim.ngayChieu).toLocaleDateString('en-GB')}</h6>
                        <h6>Giờ chiếu: {seat.thongTinPhim.gioChieu}</h6>
                    </div>
                </div>
            )
        }
    }


    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-8">
                        <div className="row screen">
                            <img src={require('./../img/screen.png')} style={{ width: '45rem', height: '3rem' }} />
                            <span className="screen-text">Màn hình</span>
                            {this.renderTable()}
                        </div>
                    </div>
                    <div className="col-sm-4">
                        {this.renderItem()}
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        seat: state.seatReducer.seat
    }
}
const mapDispatchToProp = dispatch => {
    return {
        detailSeat: (id) => {
            dispatch(action.actOnSaveListSeatAPI(id));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProp)(OptionSeat);