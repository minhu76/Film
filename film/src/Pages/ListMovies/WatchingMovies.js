import React, { Component } from 'react';
import Movie from './../../components/Movie';
import * as action from './../../redux/action/index';
import { connect } from 'react-redux';

class WatchingMovies extends Component {
    componentDidMount() {
        this.props.onSaveListMovie();
    }

    renderSource = () => {
        let { listMovies } = this.props;
        return listMovies.map((item, index) => {
            if (index < 8) {
                return <Movie key={index} movie={item} />
            }

        })
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    {this.renderSource()}
                </div>
            </div>
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
export default connect(mapStateToProps, mapDispatchToProps)(WatchingMovies);