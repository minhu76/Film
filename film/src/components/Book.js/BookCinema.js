import React, { Component } from 'react';
import _listbook from './../../SCSS/Components/Book/_listbook.scss';

export default class BookCinema extends Component {
    render() {
        return (
            <div className="my__bookDetail">
                <select className="my__bookSelect form-control">
                    <option className="my__bookOption">Rạp</option>
                </select>
            </div>
        )
    }
}
