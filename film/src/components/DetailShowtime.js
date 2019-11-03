import React, { Component } from 'react';
import * as action from './../redux/action/index';
import { connect } from "react-redux";

class DetailShowtime extends Component {
    componentDidMount() {
        let id = this.props.match.params.id;
        this.props.detailShowtime(id);
    }
    renderTable = () => {
        let { showtime } = this.props;
        if (showtime) {
            return showtime.map((item, index) => {
                return (
                    <tr key={index}>
                        <td>{item.lstCumRap.map((index, item) => {
                            console.log(item.lstCumRap);
                            return (
                                <tr key={index}>
                                    <td>{item.danhSachPhim.map((item, index) => {
                                        return (
                                            <tr key={index}>
                                                <td>{item.lstLichChieuTheoPhim.map((item, index) => {
                                                    return (
                                                        <tr key={index}>
                                                            <td>{item.tenRap}</td>
                                                            <td>{item.ngayChieuGioChieu}</td>
                                                            <td>{item.giaVe}</td>
                                                        </tr>
                                                    )
                                                })}</td>
                                            </tr>
                                        )
                                    })}</td>
                                </tr>
                            )
                        })}</td>
                    </tr>
                )
            })
        }
    }

    render() {
        return (
            <div>
                <p className="container-fluid bg-dark my-0 text-white">
                    {this.renderTable()}
                </p>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        showtime: state.showtimeReducer.showtime
    }
}
const mapDispatchToProp = dispatch => {
    return {
        detailShowtime: (id) => {
            dispatch(action.actDetailShowTimeAPI(id));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProp) (DetailShowtime);