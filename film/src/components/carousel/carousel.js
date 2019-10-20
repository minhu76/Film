import React, { Component } from 'react'
import './carousel.css';

export default class Carousel extends Component {
    render() {
        return (
            <div id="demo" className="carousel slide" data-ride="carousel">
                {/* Indicators */}
                <ul className="carousel-indicators">
                    <li data-target="#demo" data-slide-to={0} className="active" />
                    <li data-target="#demo" data-slide-to={1} />
                    <li data-target="#demo" data-slide-to={2} />
                </ul>
                {/* The slideshow */}
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={require('../../img/carousel1.jpg')} />
                    </div>
                    <div className="carousel-item">
                        <img src={require('../../img/carousel2.png')} />
                    </div>
                    <div className="carousel-item">
                        <img src={require('../../img/carousel3.jpg')} />
                    </div>
                </div>
                {/* Left and right controls */}
                <a className="carousel-control-prev prev" href="#demo" data-slide="prev">
                    <span className="carousel-control-prev-icon" />
                </a>
                <a className="carousel-control-next next" href="#demo" data-slide="next">
                    <span className="carousel-control-next-icon" />
                </a>
            </div>

        )
    }
}
