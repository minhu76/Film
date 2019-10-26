import React, { Component } from 'react'

export default class Cinema2 extends Component {
    render() {
        return (
            <div class="card container">
                <div className="row">
                    <div className="col-3">
                        <img src={require('../../img/cin5.jpg')} />
                        <div class="card-body">
                            <h4 class="card-title">Cụm rạp 5</h4>
                            <p class="card-text">Địa chỉ 5</p>
                        </div>
                    </div>
                    <div className="col-3">
                        <img src={require('../../img/cin6.jpg')} />
                        <div class="card-body">
                            <h4 class="card-title">Cụm rạp 6</h4>
                            <p class="card-text"> Địa chỉ 6</p>
                        </div>
                    </div>
                    <div className="col-3">
                        <img src={require('../../img/cin5.jpg')} />
                        <div class="card-body">
                            <h4 class="card-title">Cụm rạp 7</h4>
                            <p class="card-text">Địa chỉ 7</p>
                        </div>
                    </div>
                    <div className="col-3">
                        <img src={require('../../img/cin6.jpg')} />
                        <div class="card-body">
                            <h4 class="card-title">Cụm rạp 8</h4>
                            <p class="card-text">Địa chỉ 8</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
