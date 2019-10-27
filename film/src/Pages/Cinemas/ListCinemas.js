import React, { Component } from 'react';
import Axios from 'axios';
import * as action from './../../redux/action/index';
import { connect } from 'react-redux';
import Cinema from '../../components/Cinema';


class ListCinemas extends Component {
    componentDidMount() {
        Axios({
            method: 'GET',
            url: "http://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinHeThongRap"
        })
            .then(result => {
                this.props.onSaveListCinema(result.data);

            })
            .catch(err => {
                console.log(err);
            });
    }

    renderSource = () => {
        let { listCinemas } = this.props;
        return listCinemas.map((item, index) => {
            if (index < 6) {
                return <Cinema key={index} cinema={item} />
            }
        })

    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-3">
                        <h3>CỤM RẠP</h3>
                        {this.renderSource()}
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        listCinemas: state.cinemaReducer.listCinemas
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onSaveListCinema: (listCinemas) => {
            dispatch(action.actOnSaveListCinema(listCinemas));
        }

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ListCinemas);
