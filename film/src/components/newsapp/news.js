import React, { Component } from 'react'

export default class News extends Component {
    render() {
        return (
            <div class="card container">
                <div className="row">
                    <div className="col-6">
                        <img src={require('../../img/new5.jpg')} />
                        <div class="card-body">
                            <h4 class="card-title">Bình luận 1</h4>
                            <p class="card-text">Nội dung 1</p>
                        </div>
                    </div>
                    <div className="col-6">
                        <img src={require('../../img/new5.jpg')} />
                        <div class="card-body">
                            <h4 class="card-title">Bình luận 2</h4>
                            <p class="card-text">Nội dung 2</p>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
