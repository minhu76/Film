import React, { Component } from 'react';
import * as action from './../../redux/action/index';
import { connect } from 'react-redux';
import Showtime from './../../components/Showtime';

class ListShowtimes extends Component {
    componentDidMount() {
        let id = this.props.match.params.id;
        this.props.onSaveListShowtime(id);
        
    }
    renderSource = () => {
        let { showTimes } = this.props;
        return showTimes.map((item, index) => {
        
            if (index < 6) {
                return <Showtime key={index} showtime={item} />
            }
        })
    }
    render() {
        return (
            <div className="container">
                <h3 className="text-white">Lịch chiếu theo rạp</h3>
                <div className="row justify-content-between">
                    {this.renderSource()}
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        showTimes: state.showtimeReducer.showTimes
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onSaveListShowtime: (id) => {
            dispatch(action.actOnSaveListShowTimeAPI(id));
        }

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ListShowtimes);
