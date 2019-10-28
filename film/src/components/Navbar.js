import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import FormLogin from './../Pages/FormLogin/FormLogin';
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
                            <NavLink activeClassName="active" className="nav-link justify-content-between myNavLink" to="/">Trang Chủ</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink activeClassName="active" className="nav-link justify-content-between myNavLink" to="/list-movie">Danh Sách Phim</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink activeClassName="active" className="nav-link justify-content-between myNavLink" to="/cinemas">Cụm Rạp</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink activeClassName="active" className="nav-link justify-content-between myNavLink" to="/news">Tin Tức</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink activeClassName="active" className="nav-link justify-content-between myNavLink" to="/member">Thành Viên</NavLink>
                        </li>
                    </ul>
                    <div className="row">
                        <div>
                            <form className="form-inline" action="/action_page.php">
                                <input className="form-control mr-sm-2" type="text" placeholder="Tìm kiếm phim" />
                            </form>
                        </div>

                        <div className="my__signup">
                            <img src={require('./../img/avatar.png')} width="10%" />
                            <button className="myButton"><FormLogin /></button>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}
