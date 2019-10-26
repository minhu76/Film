import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import Login from './Login';
import SignUp from './SignUp';
import _header from './../SCSS/Components/Header/_header.scss';
import _button from './../SCSS/Components/Button/_button.scss';

export default class Navbar extends Component {
    render() {
        return (
            <div className="container-fluid myHeader">
                <nav className="navbar navbar-expand-sm justify-content-between">
                    <NavLink exact className="navbar-brand logo" to="/">
                        <img src={require('../img/web-logo.png')} width={'50px'} /></NavLink>
                    {/* Links */}
                    <ul className="navbar-nav ">
                        <li className="nav-item my__navitem">
                            <NavLink activeClassName="active" className="nav-link myNavLink" to="/">Trang Chủ</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink activeClassName="active" className="nav-link myNavLink" to="/list-movie">Danh Sách Phim</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink activeClassName="active" className="nav-link myNavLink" to="/cinemas">Cụm Rạp</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink activeClassName="active" className="nav-link myNavLink" to="/news">Tin Tức</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink activeClassName="active" className="nav-link myNavLink" to="/book-now">Đặt vé ngay</NavLink>
                        </li>
                    </ul>
                    <div className="row">
                        <form className="form-inline" action="/action_page.php">
                            <input className="form-control mr-sm-2" type="text" placeholder="Search" />    
                        </form>
                        <button className="myButton"><Login /></button>
                        <button className="myButton"><SignUp /></button>
                    </div>
                </nav>
            </div>
        )
    }
}
