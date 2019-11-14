import React, { Component } from 'react';
import BookMovie from './BookMovie';
import BookCinema from './BookCinema';
import BookDate from './BookDate';
import BookTime from './BookTime';
import Booknow from './Booknow';
import _listbook from './../../SCSS/Components/Book/_listbook.scss';


export default class ListBook extends Component {
    render() {
        return (
            <div className="row">
                <div className="container row d-flex justify-content-between align-items-center my__listBook">
                    <BookMovie />
                    <BookCinema />
                    <BookDate />
                    <BookTime />
                    <Booknow />
                </div>
            </div>
        )
    }
}
