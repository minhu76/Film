import React, { Component } from "react";
import { connect } from "react-redux";
import * as action from "./../../redux/action/index";

class FormSignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: {
        taiKhoan: "",
        hoTen: "",
        matKhau: "",
        email: "",
        soDt: ""
      },
      error: {
        taiKhoan: "",
        hoTen: "",
        matKhau: "",
        email: "",
        soDt: ""
      },
      isValid: {
        isTaiKhoanValid: false,
        isHoTenValid: false,
        isMatKhauValid: false,
        isEmailValid: false,
        isSoDTValid: false,
        isSignInValid: false
      }
    };
  }
  handleOnChange = event => {
    let { name, value } = event.target;
    this.setState({
      value: { ...this.state.value, [name]: value }
    });
  };
  handleOnSubmit = event => {
    event.preventDefault();
    const client = { ...this.state.value };
    client.maNhom = "GP03";
    client.maLoaiNguoiDung = "KhachHang";
    if (this.state.isValid.isSignInValid) {
      this.props.postSignUpUserClient(client);
      this.props.handleCloseModal();

    }
    this.setState({
      value: {
        taiKhoan: "",
        hoTen: "",
        matKhau: "",
        email: "",
        soDt: ""
      },
    })
  };
  checkValidation = event => {
    let { name, value } = event.target;
    let message = "";
    let {
      isTaiKhoanValid,
      isHoTenValid,
      isMatKhauValid,
      isEmailValid,
      isSoDTValid,
      isSignInValid
    } = this.state.isValid;
    if (value === "") {
      message = name + " not null";
      isSignInValid = false;
    } else {
      switch (name) {
        case "taiKhoan":
          isTaiKhoanValid = message === "" ? true : false;


          if (value.length < 5) {
            message = "Please type more than 5 characters";
            isTaiKhoanValid = false;
          }
          else if (this.props.listUsers.length > 0) {
            let index = this.props.listUsers.findIndex((user => {
              return user.taiKhoan === value;
            }))
            if (index !== -1) {
              message = "Username existed";
              isTaiKhoanValid = false;
            }
          }
          break;
        case "hoTen":
          isHoTenValid = message === "" ? true : false;
          break;
        case "matKhau":
          isMatKhauValid = message === "" ? true : false;
          if (value.length < 6) {
            message = "Please type password more than 6 characters";
            isMatKhauValid = false;
          }
          break;
        case "email":
          isEmailValid = message === "" ? true : false;
          let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          if (!re.test(String(value).toLowerCase())) {
            message = "email not suitable";
            isEmailValid = false;
          }
          else if (this.props.listUsers.length > 0) {
            let index = this.props.listUsers.findIndex((user => {
              return user.email === value;
            }))
            if (index !== -1) {
              message = "Email existed";
              isEmailValid = false;
            }
          }
          break;
        case "soDt":
          isSoDTValid = message === "" ? true : false;
          if (!value.match(/^\d{10}$/)) {
            message = " Phone is not suitable";
            isSoDTValid = false;
          }
          break;
        default:
          break;
      }
      isSignInValid = isTaiKhoanValid && isEmailValid && isSoDTValid;
    }
    this.setState({
      error: {
        ...this.state.error,
        [name]: message
      },
      isValid: {
        isTaiKhoanValid,
        isHoTenValid,
        isMatKhauValid,
        isEmailValid,
        isSoDTValid,
        isSignInValid
      }
    });
  };
  handShowErrorMessage = message => {
    if (message !== "") {
      return (
        <span
          class="text-left d-block"
          style={{ color: "red", marginLeft: "25%" }}
        >
          {message}
        </span>
      )
    }
  }
  render() {
    let { taiKhoan, hoTen, matKhau, email, soDt } = this.state.value;
    return (
      <div
        className="tab-pane fade"
        id="sign-up"
        role="tabpanel"
        aria-labelledby="sign-up-tab"
      >
        <form className="mt-3 text-right" onSubmit={this.handleOnSubmit}>
          <div
            className={`form-group d-flex align-items-center ${
              this.state.error.taiKhoan !== "" ? "mb-0" : ""
              }`}
          >
            <label htmlFor="inputTaiKhoanSignIn" className="mb-0">
              Username
            </label>
            <input
              type="text"
              className="form-control"
              id="inputTaiKhoanSignIn"
              placeholder="Password"
              name="taiKhoan"
              value={taiKhoan}
              onChange={this.handleOnChange}
              onBlur={this.checkValidation}
              onKeyUp={this.checkValidation}
            />
          </div>
          {this.handShowErrorMessage(this.state.error.taiKhoan)}
          <div
            className={`form-group d-flex align-items-center ${
              this.state.error.hoTen !== "" ? "mb-0" : ""
              }`}
          >
            <label htmlFor="inputHoTenSignIn" className="mb-0">
              Fullname
            </label>
            <input
              type="text"
              className="form-control"
              id="inputHoTenSignIn"
              placeholder="Fullname"
              name="hoTen"
              value={hoTen}
              onChange={this.handleOnChange}
              onBlur={this.checkValidation}
              onKeyUp={this.checkValidation}
            />
          </div>
          {this.handShowErrorMessage(this.state.error.hoTen)}
          <div
            className={`form-group d-flex align-items-center ${
              this.state.error.matKhau !== "" ? "mb-0" : ""
              }`}
          >
            <label htmlFor="inputMatKhauSignIn" className="mb-0">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="inputMatKhauSignIn"
              placeholder="Password"
              name="matKhau"
              value={matKhau}
              onChange={this.handleOnChange}
              onBlur={this.checkValidation}
              onKeyUp={this.checkValidation}
            />
          </div>
          {this.handShowErrorMessage(this.state.error.matKhau)}
          <div
            className={`form-group d-flex align-items-center ${
              this.state.error.email !== "" ? "mb-0" : ""
              }`}
          >
            <label htmlFor="inputEmailSignIn">Email</label>
            <input
              type="email"
              className="form-control"
              id="inputEmailSignIn"
              aria-describedby="emailHelp"
              placeholder="Email"
              name="email"
              value={email}
              onChange={this.handleOnChange}
              onBlur={this.checkValidation}
              onKeyUp={this.checkValidation}
            />
          </div>
          {this.handShowErrorMessage(this.state.error.email)}
          <div
            className={`form-group d-flex align-items-center  ${
              this.state.error.soDt !== "" ? "mb-0" : ""
              }`}
          >
            <label htmlFor="inputSDTSignIn" className="mb-0">
              Phone
            </label>
            <input
              type="tel"
              className="form-control"
              id="inputSDTSignIn"
              placeholder="Phone number"
              name="soDt"
              value={soDt}
              onChange={this.handleOnChange}
              onBlur={this.checkValidation}
              onKeyUp={this.checkValidation}
            />
          </div>
          {this.handShowErrorMessage(this.state.error.soDt)}
          <button type="submit" className="btn btn-warning">
            Sign Up
          </button>
        </form>
      </div>
    );
  }
}
const mapStateToDrops = state => {
  return {
    listUsers: state.movieReducer.listUsers
  }
}
const mapDispatchToDrops = dispatch => {
  return {
    postSignUpUserClient: client => {
      dispatch(action.actPostSignUpUser(client));
    }
  }
}
export default connect(mapStateToDrops, mapDispatchToDrops)(FormSignUp);
