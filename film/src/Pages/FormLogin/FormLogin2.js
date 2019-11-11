import React, { Component } from 'react'
import _formLogin from "../../SCSS/Components/Header/_formLogin.scss";


export default class FormLogin2 extends Component {
    render() {
        return (
            <div >
                {/* Button trigger modal */}
                <button type="button" className="btn login" data-toggle="modal" data-target="#exampleModal">
                    Đăng ký
            </button>
                {/* Modal */}
                <div className="modal fade form__login" id="exampleModal">
                    {/* close button */}
                    <div className="modal-dialog">
                        <button type="button" className="close" aria-label="Close" data-dismiss="modal">
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="row">
                                <div className="col-sm-3"></div>
                                <div className="col-sm-"></div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {/* form login */}
                        <div className="login__item">

                            <div className="col-sm-3 login-form-1">
                                <h5>Đăng nhập</h5>
                                <form>
                                    <div className="form-group input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"> <i className="fa fa-envelope" /> </span>
                                        </div>
                                        <input name className="form-control" placeholder="Email" type="email" />
                                    </div> {/* form-group// */}
                                    <div className="form-group input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"> <i className="fa fa-lock" /> </span>
                                        </div>
                                        <input className="form-control" placeholder="Mật khẩu" type="password" />
                                    </div> {/* form-group// */}
                                    <div className="form-group">
                                        <a href="#" className="ForgetPwd">Quên mật khẩu?</a>
                                        <input type="submit" className="btnSubmit" defaultValue="Login" />
                                    </div>

                                    {/* login bang facebook va google plus */}
                                    <div className="social ">
                                        <div className="form-group btn-block">
                                            <button type="submit" className="btn btn-primary btn-block"> <i className="fa fa-google-plus"></i> &nbsp; Google Plus</button>
                                        </div> {/* form-group// */}
                                        <div className="form-group btn-block" >
                                            <button type="submit" className="btn btn-primary btn-block"> <i className="fa fa-facebook"></i> &nbsp; Facebook</button>
                                        </div> {/* form-group// */}
                                    </div>
                                </form>
                            </div>

                            {/* form rigister */}
                            <div className="col-sm-3 login-form-2">
                                <h5>Đăng ký</h5>
                                <form>
                                    <div className="form-group input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"> <i className="fa fa-user" /> </span>
                                        </div>
                                        <input name className="form-control" placeholder="Full name" type="text" />
                                    </div> {/* form-group// */}
                                    <div className="form-group input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"> <i className="fa fa-envelope" /> </span>
                                        </div>
                                        <input name className="form-control" placeholder="Email address" type="email" />
                                    </div> {/* form-group// */}
                                    <div className="form-group input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"> <i className="fa fa-phone" /> </span>
                                        </div>

                                        <input name className="form-control" placeholder="Phone number" type="text" />
                                    </div>
                                    <div className="form-group input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"> <i className="fa fa-lock" /> </span>
                                        </div>
                                        <input className="form-control" placeholder="Create password" type="password" />
                                    </div> {/* form-group// */}
                                    <div className="form-group input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"> <i className="fa fa-lock" /> </span>
                                        </div>
                                        <input className="form-control" placeholder="Repeat password" type="password" />
                                    </div> {/* form-group// */}
                                    <div className="form-group">
                                        <button type="submit" className="btn btn-primary btn-block"> Create Account</button>
                                    </div> {/* form-group// */}

                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}
