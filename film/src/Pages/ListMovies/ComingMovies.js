import React, { Component } from 'react';
import Axios from 'axios';
import Movie from './../../components/Movie';
import * as action from './../../redux/action/index';
import { connect } from 'react-redux';

class ComingMovies extends Component {
    componentDidMount() {
        Axios({
            method: "GET",
            url: "http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01"
        })
            .then(result => {
                this.props.onSaveListMovie(result.data);
            })
            .catch(err => {
                console.log(err);
            });

    }

    renderSource = () => {
        let { listMovies } = this.props;
        return listMovies.map((item, index) => {
            if(index < 6){
                return <Movie key={index} movie={item} />
            }
        })
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    {this.renderSource()}
                    {/* {this.renderHTML()} */}
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
        onSaveListMovie: (listMovies) => {
            dispatch(action.actOnSaveListMovie(listMovies));
        }

    };
};
export default connect(mapStateToProps, mapDispatchToProps)(ComingMovies);