import React, { Component } from 'react'

export default class Booknow extends Component {
    render() {
        return (
            <div className="container">
                <h3>BOOK NOW</h3>
                <div className="row">
                    <div className="col-3">
                        <img src={require('../../img/promotion.jpg')} />
                    </div>
                    <div className="col-3">
                        <img src={require('../../img/promotion.jpg')} />
                    </div>
                    <div className="col-3">
                        <img src={require('../../img/promotion.jpg')} />
                    </div>
                    <div className="col-3">
                        <img src={require('../../img/promotion.jpg')} />
                    </div>
                </div>            
            </div>
        )
    }
}
