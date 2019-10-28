import React, { Component } from 'react';
import _carousel from './../SCSS/Components/Carousel/_carousel.scss';

export default class Carousel extends Component {
    render() {
        let { carousel } = this.props;
        return (
            <div id="demo" className="carousel slide" data-ride="carousel">
                {/* Indicators */}
                <ul className="carousel-indicators">
                    <li data-target="#demo" data-slide-to={0} className="active" />
                    <li data-target="#demo" data-slide-to={1} />
                    <li data-target="#demo" data-slide-to={2} />
                    <li data-target="#demo" data-slide-to={3} />
                </ul>
                {/* The slideshow */}

                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={require('./../img/carousel5.jpg')} width="100%" />
                    </div>
                    <div className="carousel-item">
                        <img src={require('./../img/carousel2.jpg')}  width="100%" />
                    </div>
                    <div className="carousel-item">
                        <img src={require('./../img/carousel3.jpg')}  width="100%" />
                    </div>
                    <div className="carousel-item">
                        <img src={require('./../img/carousel1.jpg')}  width="100%" />
                    </div>
                </div>
                {/* Left and right controls */}
                <a className="carousel-control-prev prev" href="#demo" data-slide="prev">                  
                    <img src={require('./../img/left-arrow.png')} />
                </a>
                <a className="carousel-control-next next" href="#demo" data-slide="next">                  
                    <img src={require('./../img/right-arrow.png')} />
                </a>
            </div>

        )
    }
}
