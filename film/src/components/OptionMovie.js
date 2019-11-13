import React, { Component, Fragment } from 'react';
import * as action from './../redux/action/index';
import { connect } from 'react-redux';

class OptionMovie extends Component {
    renderSource = () => {
        let { listMovies } = this.props;
        return listMovies.map((item, index) => {
            return <option key={index}>{item.tenPhim}</option>
        })
    }

    render() {
        let {listMovies} = this.props;
        console.log(listMovies);
        return (
            <Fragment>
                {this.renderSource()}
            </Fragment>
           
        )
    }
}
const mapStateToProps = (state) => {
    return {
        listMovies: state.movieReducer.listMovies
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onSaveListMovie: () => {
            dispatch(action.actOnSaveListMovieAPI());
        }

    };
};
export default connect(mapStateToProps, mapDispatchToProps)(OptionMovie);