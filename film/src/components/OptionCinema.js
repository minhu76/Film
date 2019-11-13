import React, { Component, Fragment } from 'react';
import * as action from './../redux/action/index';
import { connect } from 'react-redux';

class OptionCinema extends Component {
    
    renderSource = () => {
        let {listCinemas} = this.props;
        console.log(this.props)
        return listCinemas.map((item, index) => {
            return <option key={index}>{item.maHeThongRap}</option>
        })
    }

    render() {
        let {listCinemas} = this.props;
        console.log(listCinemas);
        return (
            <Fragment>
                {this.renderSource()}
            </Fragment>
           
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
        onSaveListCinema: () => {
            dispatch(action.actOnSaveListCinemaAPI());
        }

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(OptionCinema);