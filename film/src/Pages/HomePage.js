import React, { Component } from 'react';
import Carousel from './../components/Carousel';
import MyMovies from './ListMovies/my-movie';
import ListCinemas from './Cinemas/ListCinemas';
import ListNews from './News/ListNews';
import Banner from './Banner/Banner';

export default class HomePage extends Component {
    render() {
        return (
            <div className="myBody">
                <Carousel />
                <MyMovies />
                <ListCinemas />
                <Banner />
                <ListNews />
            </div>
        )
    }
}
