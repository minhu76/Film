import React, { Component } from 'react'

export default class Cinema extends Component {
    render() {
        return (
            <div class="card container">
                <div className="row">
                    <div className="col-3">
                        <img src={require('../../img/cin1.jpg')} />
                        <div class="card-body">
                            <h4 class="card-title">Cụm rạp 1</h4>
                            <p class="card-text">Địa chỉ 1</p>
                        </div>
                    </div>
                    <div className="col-3">
                        <img src={require('../../img/cin2.jpg')} />
                        <div class="card-body">
                            <h4 class="card-title">Cụm rạp 2</h4>
                            <p class="card-text">Địa chỉ 2</p>
                        </div>
                    </div>
                    <div className="col-3">
                        <img src={require('../../img/cin3.jpg')} />
                        <div class="card-body">
                            <h4 class="card-title">Cụp rạp 3</h4>
                            <p class="card-text">Địa chỉ 3</p>
                        </div>
                    </div>
                    <div className="col-3">
                        <img src={require('../../img/cin4.jpg')} />
                        <div class="card-body">
                            <h4 class="card-title">Cụm rạp 4</h4>
                            <p class="card-text">Địa chỉ 4</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
