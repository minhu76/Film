import React, { Component } from 'react';
import _listbook from './../../SCSS/Components/Book/_listbook.scss';
import OptionMovie from '../OptionMovie';

export default class BookFilm extends Component {
    render() {
        return (
            <div className="my__bookDetail">
                <select className="my__bookSelect form-control">
                    <option className="my__bookOption">Phim</option>
                    <OptionMovie />
                </select>
            </div>

        )
    }
}
