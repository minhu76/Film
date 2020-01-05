import React, { Component } from 'react'

export default class Banner extends Component {
    render() {
        return (
            <div className="container">
                <img src={require('./../../img/banner.png')}/>
            </div>
        )
    }
}
