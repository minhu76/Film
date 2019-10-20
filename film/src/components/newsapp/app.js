import React, { Component } from 'react'

export default class App extends Component {
    render() {
        return (
            <div class="card container">
                <div className="row">
                    <div className="col-6">
                        <img src={require('../../img/app.png')} />
                        <div class="card-body">
                            <h4 class="card-title">Iphone</h4>
                            <p class="card-text">Nội dung 1</p>
                        </div>
                    </div>
                    <div className="col-6">
                        <img src={require('../../img/app.png')} />
                        <div class="card-body">
                            <h4 class="card-title">Android</h4>
                            <p class="card-text">Nội dung 2</p>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
