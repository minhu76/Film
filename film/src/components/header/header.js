import React, { Component } from 'react'
import './header.css';

export default class Header extends Component {
    render() {
        return (
            <header className="header">
                <a href="#" className="header__logo">
                    <img src={require('../../img/web-logo.png')} alt=""/>
                </a>
                <nav className="header__nav">
                    <ul>
                        <li className="active">
                            <a href="#">Lịch chiếu</a>
                        </li>
                        <li>
                            <a href="#">Cụm rạp</a>
                        </li>
                        <li>
                            <a href="#">Tin tức</a>
                        </li>
                        <li>
                            <a href="#">Ứng dụng</a>
                        </li>   
                    </ul>
                </nav>
                <a className="header__login" href="#">
                    <i className="fa fa-user-circle"></i>
                    <span>Đăng nhập</span>
                </a>
            </header>
        )
    }
}
