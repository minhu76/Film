import React, { Component } from 'react';
import _formsignup from './../../SCSS/Components/Header/_formsignup.scss';

export default class FormSignUp extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         values: {
    //             username: "",
    //             password: "",
    //             email: ""
    //         },
    //         errors: {
    //             username: "",
    //             password: "",
    //             email: ""
    //         },
    //         formValid: false,
    //         usernameValid: false,
    //         passwordValid: false,
    //         emailValid: false
    //     }
    // }

    // handleSubmit(e) {
    //     e.preventDefault();
    //     console.log(222);
    // }
    // handleOnChange = (event) => {
    //     let { name, value } = event.target;

    //     this.setState({
    //         values: { ...this.state.values, [name]: value }
    //     }, () => { console.log(this.state) })

    // }
    // handleErrors = (event) => {
    //     let { name, value } = event.target;
    //     console.log(name, value);
    //     let message = value === "" ? name + "????" : "";
    //     let { usernameValid, passwordValid, emailValid } = this.state;
    //     console.log(message);
    //     switch (name) {
    //         case "username":
    //             usernameValid = message !== "" ? false : true;
    //             if (value !== "" && value.length < 4) {
    //                 usernameValid = false;
    //                 message = "Bạn vui lòng nhập hơn 4 ký tự";
    //             }
    //             break;
    //         case "password":
    //             passwordValid = message !== "" ? false : true;
    //             break;
    //         case "email":
    //             emailValid = message !== "" ? false : true;
    //             if (value !== "" && !value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
    //                 message = "Email không hợp lệ";
    //                 emailValid = false;
    //             }
    //             break;
    //     }
    //     this.setState({
    //         errors: { ...this.state.errors, [name]: message },
    //         usernameValid,
    //         passwordValid,
    //         emailValid
    //     }, this.formValidation());
    // }

    // formValidation = () => {
    //     this.setState({
    //         formValid: this.state.usernameValid && this.state.passwordValid && this.state.emailValid
    //     })
    // }


    render() {
        return (
            //         <div>
            //             <div className="container">
            //                 <div className="row">
            //                     <div className="col-sm-6 mx-auto">
            //                         <h3>Đăng Ký</h3>
            //                         <p> Tạo tài khoản miễn phí</p>
            //                         <form onSubmit={this.handleSubmit}>
            //                             <div className="form-group">
            //                                 <label htmlFor="">Họ Tên</label>
            //                                 <input type="text" className="form-control" name="username" onChange={this.handleOnChange} onBlur={this.handleErrors} onKeyUp={this.handleErrors} />
            //                                 {this.state.errors.username !== "" ? <div className="alert alert-danger">{this.state.errors.username}</div> : ""}
            //                             </div>
            //                             <div className="form-group">
            //                                 <label htmlFor="">Mật Khẩu</label>
            //                                 <input type="text" className="form-control" name="password" onChange={this.handleOnChange} onBlur={this.handleErrors} onKeyUp={this.handleErrors} />
            //                                 {this.state.errors.password !== "" ? <div className="alert alert-danger">{this.state.errors.password}</div> : ""}
            //                             </div>
            //                             <div className="form-group">
            //                                 <label htmlFor="">Email</label>
            //                                 <input type="text" className="form-control" name="email" onChange={this.handleOnChange} onBlur={this.handleErrors} onKeyUp={this.handleErrors} />
            //                                 {this.state.errors.email !== "" ? <div className="alert alert-danger">{this.state.errors.email}</div> : ""}
            //                             </div>
            //                             <button type="submit" className="container btn btn-success" disabled={!this.state.formValid}>Đăng Ký Tài Khoản</button>
            //                         </form>
            //                         {/* <button className="container btn btn-info" onClick={this.handleOk}> OK</button> */}
            //                     </div>
            //                 </div>
            //             </div>
            //         </div>


            <div className="card bg-light">
                <article className="card-body mx-auto" style={{ maxWidth: 400 }}>
                    <h4 className="card-title mt-3 text-center">Đăng Ký</h4>
                    <p className="text-center">Tạo tài khoản miễn phí ở đây</p>
                    <form>
                        <div className="form-group input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text"> <i className="fa fa-user" /> </span>
                            </div>
                            <input name className="form-control" placeholder="Họ tên" type="text" />
                        </div>
                        <div className="form-group input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text"> <i className="fa fa-envelope" /> </span>
                            </div>
                            <input name className="form-control" placeholder="Email" type="email" />
                        </div>
                        <div className="form-group input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text"> <i className="fa fa-phone" /> </span>
                            </div>
                            <select className="custom-select" style={{ maxWidth: 120 }}>
                                <option selected>+084</option>
                                <option value={1}>+0383</option>
                            </select>
                            <input name className="form-control" placeholder="Số điện thoại" type="text" />
                        </div>
                        <div className="form-group input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text"> <i className="fa fa-building" /> </span>
                            </div>
                            <select className="form-control">
                                <option selected> Giới Tính</option>
                                <option>Nam</option>
                                <option>Nữ</option>
                            </select>
                        </div>
                        <div className="form-group input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text"> <i className="fa fa-lock" /> </span>
                            </div>
                            <input className="form-control" placeholder="Mật khẩu" type="password" />
                        </div>
                        <div className="form-group input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text"> <i className="fa fa-lock" /> </span>
                            </div>
                            <input className="form-control" placeholder="Nhập lại mật khẩu" type="password" />
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-primary btn-block"> Tạo tài khoản</button>
                        </div>
                        <p className="text-center">Bạn có tài khoản chưa? <a href>Đăng nhập</a> </p>
                    </form>
                </article>
            </div>

        )
    }
}
