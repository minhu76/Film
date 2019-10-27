import React, { Component } from 'react';
import Axios from 'axios';
import * as action from './../../redux/action/index';
import { connect } from 'react-redux';
import Carousel from './../../components/Carousel';


class ListCarousels extends Component {
    componentDidMount() {
        Axios({
            method: 'GET',
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
            if (index < 1) {
                return <Carousel key={index} carousel={item} />
            }
        })

    }

    render() {
        return (
            <div className="carousel">              
                    {this.renderSource()}           
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

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ListCarousels);

