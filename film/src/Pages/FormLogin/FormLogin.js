import React, { Component } from 'react';
import { connect } from "react-redux";
import * as action from "./../../redux/action/index";
import Swal from 'sweetalert2';

class FormLogIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taiKhoan: "",
      matKhau: "",
      isNullTaiKhoan: false,  
      isNullMatKhau: false   
    }
  }
  handOnChange = event => {
    let { name, value } = event.target;

    this.setState({
      [name]: value
    })
  }
  handleSignInUser = event => {
    event.preventDefault();
    let { listUsers } = this.props;
    let { taiKhoan, matKhau, isNullTaiKhoan, isNullMatKhau } = this.state;
    if (listUsers.length > 0) {
      if ((taiKhoan !== "") && (matKhau !== "")) {
        let index = listUsers.findIndex(user => {
          return (taiKhoan === user.taiKhoan) && (matKhau === user.matKhau) && (user.maLoaiNguoiDung === "KhachHang");
        })
        isNullTaiKhoan = false;
        isNullMatKhau = false;
        if (index !== -1) {
          Swal.fire(
            'Sign In Successfully',
            '',
            'success'
          )
            .then(result => {
              window.location.reload();
            })
          // localStorage.removeItem("userClient");
          localStorage.setItem("userClient", JSON.stringify(this.state.taiKhoan));
        }
        else {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Username or password wrong',
          })

        }
        this.props.handleCloseModal();
      }
      else {
        isNullTaiKhoan = (taiKhoan === "") ? true : false
        isNullMatKhau = (matKhau === "") ? true : false
      }
    }
    this.setState({
      isNullTaiKhoan,
      isNullMatKhau,
      taiKhoan: "",
      matKhau: ""
    })
  }
  componentDidMount() {
    this.props.getListUsers();
  }
  render() {
    return (
      <div
        className="tab-pane fade show active"
        id="sign-in"
        role="tabpanel"
        aria-labelledby="sign-in-tab"
      >
        <div className="signin--message ">
          <p className="mb-4">
            Vui lòng đăng nhập
            </p>
          <form className="mt-3 text-right" onSubmit={this.handleSignInUser}>
            <div className={`form-group d-flex align-items-center ${this.state.isNullTaiKhoan ? "mb-0" : ""}`}>
              <label htmlFor="inputtaiKhoan" className="mb-0">
                Username
                </label>
              <input
                type="text"
                className="form-control"
                id="inputtaiKhoan"
                name="taiKhoan"
                placeholder="Username"
                onChange={this.handOnChange}
                value={this.state.taiKhoan}
              />
            </div>
            {((this.state.isNullTaiKhoan) && (this.state.taiKhoan === "")) ? (
              <span
                class="text-left d-block"
                style={{ color: "red", marginLeft: "25%" }}
              >
                Username, please
            </span>
            ) : (
                ""
              )}
            <div className={`form-group d-flex  align-items-center ${this.state.isNullMatKhau ? "mb-0" : ""}`}>
              <label htmlFor="inputmatKhau" className="mb-0">
                Password
                </label>
              <input
                type="password"
                className="form-control"
                id="inputmatKhau"
                name="matKhau"
                placeholder="Password"
                onChange={this.handOnChange}
                value={this.state.matKhau}
              />
            </div>
            {(this.state.isNullMatKhau && (this.state.matKhau === "")) ? (
              <span
                class="text-left d-block"
                style={{ color: "red", marginLeft: "25%" }}
              >
                Password, please
            </span>
            ) : (
                ""
              )}
            <div className="form-group checked">
              <input
                type="checkbox"
                id="input-login-checked"
                className="login__checkbox"
                style={{width: "0"}}
              />
              <span className="login__checkmark" />
              <label htmlFor="input-login-checked" style={{width: "150px", marginRight: "60%"}}>
                Remember me
              </label>
            </div>
            <button type="submit" className="btn btn-primary">
              Log In
              </button>
          </form>
        </div>
      </div>
    );
  }
}
const mapStateToDrops = state => {
  return {
    listUsers: state.movieReducer.listUsers,
  }
}
const mapDispatchToDrops = dispatch => {
  return {
    getListUsers: () => {
      dispatch(action.actGetListUser());
    }
  }
}
export default connect(mapStateToDrops, mapDispatchToDrops)(FormLogIn);