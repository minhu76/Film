import React, { Component } from 'react'
import News from './news';
import App from './app';
export default class Newsapp extends Component {
    render() {
        return (
            <div className="container">
                <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                    <li className="nav-item">
                        <a className="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home2" role="tab" aria-controls="pills-home" aria-selected="true">TIN TỨC</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile2" role="tab" aria-controls="pills-profile" aria-selected="false">ỨNG DỤNG</a>
                    </li>
                </ul>
                <div className="tab-content" id="pills-tabContent">
                    <div className="tab-pane fade show active" id="pills-home2" role="tabpanel" aria-labelledby="pills-home-tab">
                        <News />
                    </div>
                    <div className="tab-pane fade" id="pills-profile2" role="tabpanel" aria-labelledby="pills-profile-tab">
                        <App />
                    </div>
                </div>
            </div>

        )
    }
}
