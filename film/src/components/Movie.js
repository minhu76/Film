    import React, { Component } from 'react';
import { NavLink} from 'react-router-dom';
import _movie from './../SCSS/Components/Movie/_movie.scss';

export default class Movie extends Component {
    render() {
        let {movie} = this.props;
        return (
            <div className="col-sm-3 py-1">
                <div className="card border-0">
                    <img className="card-img-top" src={movie.hinhAnh} width="100%" height={350}/>
                    <div className="card-body">
                        <h4 className="card-title myPhim__Name">{movie.tenPhim}</h4>
                        <p className="card-content myPhim_mota">{movie.moTa}</p>
                        <NavLink className="container btn btn-success " to={`/detail-movie/${movie.maPhim}`}>Chi tiết</NavLink>
                    </div>
                </div>
            </div>
        )
    }
}
