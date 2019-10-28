import React, { Component } from 'react';
import _formsignup from './../../SCSS/Components/Header/_formsignup.scss';

export default class FormSignUp extends Component {
    render() {
        return (
            <div className="card bg-light">
                <article className="card-body mx-auto" style={{ maxWidth: 400 }}>
                    <h4 className="card-title mt-3 text-center">Create Account</h4>
                    <p className="text-center">Get started with your free account</p>
                    <p>
                        <a href className="btn btn-block btn-twitter"> <i className="fab fa-twitter" /> &nbsp; Login via Twitter</a>
                        <a href className="btn btn-block btn-facebook"> <i className="fab fa-facebook-f" /> &nbsp; Login via facebook</a>
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
                        </div> 
                        <div className="form-group input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text"> <i className="fa fa-envelope" /> </span>
                            </div>
                            <input name className="form-control" placeholder="Email address" type="email" />
                        </div> 
                        <div className="form-group input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text"> <i className="fa fa-phone" /> </span>
                            </div>
                            <select className="custom-select" style={{ maxWidth: 120 }}>
                                <option selected>+084</option>
                                <option value={1}>+083</option>
                            </select>
                            <input name className="form-control" placeholder="Phone number" type="text" />
                        </div> 
                        <div className="form-group input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text"> <i className="fa fa-building" /> </span>
                            </div>
                            <select className="form-control">
                                <option selected> Select job type</option>
                                <option>Designer</option>
                                <option>Manager</option>
                                <option>Accounting</option>
                            </select>
                        </div> 
                        <div className="form-group input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text"> <i className="fa fa-lock" /> </span>
                            </div>
                            <input className="form-control" placeholder="Create password" type="password" />
                        </div> 
                        <div className="form-group input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text"> <i className="fa fa-lock" /> </span>
                            </div>
                            <input className="form-control" placeholder="Repeat password" type="password" />
                        </div> 
                        <div className="form-group">
                            <button type="submit" className="btn btn-primary btn-block"> Create Account</button>
                        </div> 
                        <p className="text-center">Have an account? <a href>Log In</a> </p>
                    </form>
                </article>
            </div> 


        )
    }
}
