import React, { Component } from 'react'
import _movie from './../SCSS/Components/Movie/_movie.scss';

export default class Movie extends Component {
    render() {
        let {movie} = this.props;
        return (
            <div className="col-sm-3 py-1">
                <div className="card border-0">
                    <iframe className="card-img-top" src={movie.trailer} width="100%" height={300} />
                    <div className="card-body">
                        <h4 className="card-title myPhim__Name">{movie.tenPhim}</h4>
                        <p className="myPhim_mota">{movie.moTa}</p>
                        <button className="btn btn-danger container-fluid">Mua Vé</button>
                    </div>
                </div>

            </div>
        )
    }
}
