import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import _listbook from './../../SCSS/Components/Book/_listbook.scss';


export default class Booknow extends Component {
    render() {
        return (
            <div>
                <NavLink className="container btn btn-secondary" to="">MUA VÉ NGAY</NavLink>
            </div>
        )
    }
}
