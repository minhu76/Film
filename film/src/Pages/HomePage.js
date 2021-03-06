import React, { Component } from 'react';
import Carousel from './../components/Carousel';
import ListMovies from './ListMovies/ListMovies';
import ListCinemas from './Cinemas/ListCinemas';
import ListNews from './News/ListNews';
//import ListBook from './../components/Book.js/ListBook';
import _body from './../SCSS/Components/Body/_body.scss';
import BookMovie from '../components/Book.js/BookMovie';

export default class HomePage extends Component {
    render() {
        return (
            <div className="myBody">
                <Carousel />
                <BookMovie />
                <ListMovies />
                <ListCinemas />
                <ListNews />
            </div>
        )
    }
}
