import React, { Component } from 'react'
import News from './News';
import Hollywood from './Hollywood';
import Promotion from './Promotion';
export default class ListNews extends Component {
    render() {
        return (
            <div className="container">
                <ul className="nav nav-pills my-3 justify-content-center" id="pills-tab" role="tablist">
                    <li className="nav-item">
                        <a className="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home2" role="tab" aria-controls="pills-home" aria-selected="true">ĐIỆN ẢNH</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile2" role="tab" aria-controls="pills-profile" aria-selected="false">REVIEW</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile3" role="tab" aria-controls="pills-profile" aria-selected="false">KHUYẾN MÃI</a>
                    </li>
                </ul>
                <div className="tab-content" id="pills-tabContent">
                    <div className="tab-pane fade show active" id="pills-home2" role="tabpanel" aria-labelledby="pills-home-tab">
                        <News />
                    </div>
                    <div className="tab-pane fade" id="pills-profile2" role="tabpanel" aria-labelledby="pills-profile-tab">
                        <Hollywood />
                    </div>
                    <div className="tab-pane fade" id="pills-profile3" role="tabpanel" aria-labelledby="pills-profile-tab">
                        <Promotion />
                    </div>
                </div>
            </div>

        )
    }
}
