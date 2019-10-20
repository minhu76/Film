import React, { Component } from 'react'
import './movie.css';

export default class Movie extends Component {
    render() {
        return (
            <div className="movie">
                <div className="row">
                    <div className="col-3">
                        <div className="movie__item">
                            <img src={require('../../img/film1.jpg')} />
                            <p className="movie__name">Troi sang roi: Ta di ngu</p>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="movie__item">
                            <img src={require('../../img/film2.jpg')} />
                            <p className="movie__name">Hung than dai duong</p>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="movie__item">
                            <img src={require('../../img/film3.jpg')} />
                            <p className="movie__name">Nguoi ban ngoai dai duong</p>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="movie__item">
                            <img src={require('../../img/film4.jpg')} />
                            <p className="movie__name">Ma dong giang the</p>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-3">
                        <div className="movie__item">
                            <img src={require('../../img/film1.jpg')} />
                            <p className="movie__name">Troi sang roi: Ta di ngu</p>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="movie__item">
                            <img src={require('../../img/film2.jpg')} />
                            <p className="movie__name">Hung than dai duong</p>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="movie__item">
                            <img src={require('../../img/film3.jpg')} />
                            <p className="movie__name">Nguoi ban ngoai dai duong</p>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="movie__item">
                            <img src={require('../../img/film4.jpg')} />
                            <p className="movie__name">Ma dong giang the</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
