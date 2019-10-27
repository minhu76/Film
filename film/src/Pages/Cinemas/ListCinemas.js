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
                <h3>Cụm Rạp</h3>
                <div className="row">
                    <div className="col-4">
                        <div className="nav flex-column" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                            <a className="nav-link active" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">{this.renderSource()}</a>
                        </div>
                        </div>
                        <div className="tab-content" id="v-pills-tabContent">
                            <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">BHD</div>
                            {/* <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">CGV</div>
                            <div className="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">...</div>
                            <div className="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">...</div> */}
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
