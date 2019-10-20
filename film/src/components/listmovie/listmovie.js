import React, { Component } from 'react'
import Movie from './movie';

export default class Listmovie extends Component {
    render() {
        return (
            <div className="container">
                <ul className="nav nav-pills mb-3 abc" id="pills-tab" role="tablist">
                    <li className="nav-item">
                        <a className="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home1" role="tab" aria-controls="pills-home" aria-selected="true">ĐANG CHIẾU</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile1" role="tab" aria-controls="pills-profile" aria-selected="false">SẮP CHIẾU</a>
                    </li>
                </ul>
                <div className="tab-content" id="pills-tabContent">
                    <div className="tab-pane fade show active" id="pills-home1" role="tabpanel" aria-labelledby="pills-home-tab">
                        <Movie />
                    </div>
                    <div className="tab-pane fade" id="pills-profile1" role="tabpanel" aria-labelledby="pills-profile-tab">
                        <Movie />
                    </div>
                </div>
            </div>
        )
    }
}
