import React, { Component } from 'react';
import OptionDate from './../OptionDate';
import _listbook from './../../SCSS/Components/Book/_listbook.scss';

export default class BookDate extends Component {
    render() {
        return (
            <div className="my__bookDetail">
                <select className="my__bookSelect form-control">
                    <option className="my__bookOption">Ngày xem</option>
                    <OptionDate />
                </select>
            </div>
        )
    }
}
