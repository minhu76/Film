import React, { Component } from 'react';
import ListMovies from './ListMovies/ListMovies';
import Booknow from './Booknow/Booknow';
import ListCinemas from './Cinemas/ListCinemas';
import NewsApp from './News/NewsApp';
import _body from './../SCSS/Components/Body/_body.scss';

export default class HomePage extends Component {
    render() {
        return (
            <div className="myBody">
                <ListMovies />               
                <ListCinemas />
                <Booknow />
                <NewsApp />
            </div>
        )
    }
}
