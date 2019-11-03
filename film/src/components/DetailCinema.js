import React, { Component } from 'react';
import * as action from './../redux/action/index';
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";


class DetailCinema extends Component {
    componentDidMount() {
        let id = this.props.match.params.id;
        this.props.detailCinema(id);
    }
    renderTable = () => {
        let { cinema } = this.props;
          if (cinema) {
            return cinema.map((item, index) => {
                return (
                    <tr key={index}>
                        <td>{item.tenCumRap}</td>
                        <td>{item.diaChi}</td>
                        <td>{item.danhSachRap.map((item,index)=>{
                            return (
                                <tr key={index}>
                                    <td>{item.tenRap}</td>
                                    <NavLink className="btn btn-success text-white" to={`/detail-showtime/${item.maRap}`}>Xem lịch chiếu</NavLink>
 
                                </tr>
                            )
                        })}
                        </td>
                    </tr>
                )
            })
        }
      }
    render(){
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
export default connect(mapStateToProps, mapDispatchToProp) (DetailCinema);