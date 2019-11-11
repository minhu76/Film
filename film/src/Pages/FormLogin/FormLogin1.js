import React, { Component } from 'react'
import _login from './../../SCSS/Components/Header/_login.scss';

export default class FormLogin1 extends Component {
    render() {
        return (
            <div>
                {/* Button trigger modal */}
                <button type="button" className="btn login" data-toggle="modal"  data-target="#exampleModal">
                        Đăng ký
                </button>
                {/* Modal */}
                <div className="modal fade form bg-light" id="exampleModal">
                    <article className="form-body mx-auto" style={{ maxWidth: '400px' }}>
                        <h4 className="form-title mt-3 text-center">Create Account</h4>
                        <p className="text-center">Get started with your free account</p>
                        <p>
                            <a href="" className="btn btn-block btn-googleplus"> <i className="fa fa-google-plus"></i> &nbsp; Login via Google Plus</a>
                            <a href="" className="btn btn-block btn-facebook"> <i className="fa fa-facebook"></i> &nbsp; Login via Facebook</a>
                        </p>
                        <p className="divider-text">
                            <span className="bg-light">OR</span>
                        </p>
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
                                <select className="custom-select" style={{ maxWidth: '120px' }}>
                                    <option selected>+971</option>
                                    <option value={1}>+972</option>
                                    <option value={2}>+198</option>
                                    <option value={3}>+701</option>
                                </select>
                                <input name className="form-control" placeholder="Phone number" type="text" />
                            </div> {/* form-group// */}
                            <div className="form-group input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"> <i className="fa fa-building" /> </span>
                                </div>
                                <select className="form-control">
                                    <option selected> Select job type</option>
                                    <option>Designer</option>
                                    <option>Manager</option>
                                    <option>Accaunting</option>
                                </select>
                            </div> {/* form-group end.// */}
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
                            <p className="text-center">Have an account? <a href>Log In</a> </p>
                        </form>
                    </article>
                </div>
            </div>
        )
    }
}
