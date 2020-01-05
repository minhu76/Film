import React, { Component } from 'react';
import Right from './Right';
import Guide from './Guide';
import Rule from './Rule';

export default class ListMember extends Component {
    render() {
        return (
            <div className="container pt-5" id="memberblock">
                <ul className="nav nav-pills mx-auto" id="pills-tab" role="tablist">
                    <li className="nav-item">
                        <a className="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home3" role="tab" aria-controls="pills-home" aria-selected="true">Thể Lệ</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile4" role="tab" aria-controls="pills-profile" aria-selected="false">Quyền Lợi</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile5" role="tab" aria-controls="pills-profile" aria-selected="false">Hướng Dẫn</a>
                    </li>
                </ul>
                <div className="tab-content" id="pills-tabContent">
                    <div className="tab-pane fade show active" id="pills-home3" role="tabpanel" aria-labelledby="pills-home-tab">
                        <div className="carousel">
                            <Rule />
                        </div>
                    </div>
                    <div className="tab-pane fade" id="pills-profile4" role="tabpanel" aria-labelledby="pills-profile-tab">
                        <div className="carousel">
                            <Right />
                        </div>
                    </div>
                    <div className="tab-pane fade show active" id="pills-home5" role="tabpanel" aria-labelledby="pills-home-tab">
                        <div className="carousel">
                            <Guide />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
