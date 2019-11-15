import React, { Component } from 'react';
import BookMovie from './BookMovie';
import OptionBook from './OptionBook';
import _listbook from './../../SCSS/Components/Book/_listbook.scss';


export default class ListBook extends Component {
    render() {
        return (
            <div className="row">
                <div className="container d-flex justify-content-between align-items-center my__listBook">
                    <BookMovie />
                    {/* <OptionBook /> */}
                </div>
            </div>
        )
    }
}
