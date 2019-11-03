import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import FormLogin from './../Pages/FormLogin/FormLogin';
//import Login from './Login';
import _header from './../SCSS/Components/Header/_header.scss';
import _button from './../SCSS/Components/Button/_button.scss';

export default class Navbar extends Component {
    render() {
        return (
                <nav className="navbar navbar-expand-sm justify-content-between">
                    <NavLink exact className="navbar-brand logo" to="/">
                        <img src={require('../img/web-logo.png')} width={'60px'} /></NavLink>
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
                            <NavLink activeClassName="active" className="nav-link myNavLink" to="/member">Thành Viên</NavLink>
                        </li>
                    </ul>
                    <div className="row">
                        <div>
                            <form className="form-inline" action="/action_page.php">
                                <input className="form-control mr-2" type="text" placeholder="Tìm kiếm phim" />
                            </form>
                        </div>

                        <div className="my__signup">
                            <img src={require('./../img/avatar.png')} width="30px" />
                            <button className="myButton"><FormLogin /></button>
                            {/* <button className="myButton"><Login /></button> */}
                        </div>
                    </div>
                </nav>
        )
    }
}
