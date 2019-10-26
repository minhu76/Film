import React, { Component } from 'react';

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
                </ul>
                {/* The slideshow */}
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <iframe src={carousel.trailer} width="100%" height="100%" />
                    </div>
                    <div className="carousel-item">
                        <iframe src={carousel.trailer} width="100%" height="100%" />
                    </div>
                    <div className="carousel-item">
                        <iframe src={carousel.trailer} width="100%" height="100%" />
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
