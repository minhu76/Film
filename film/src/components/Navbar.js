import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import ModalLogin from "./../Pages/FormLogin/modal-login";
import Swal from 'sweetalert2';
import logo from "./../img/web-logo.png"

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taiKhoan: ""
    }
  }
  handleShowAccount = () => {
    if (localStorage.getItem("userClient")) {
      this.setState({
        taiKhoan: JSON.parse(localStorage.getItem("userClient"))
      })
    }
  }
  handleSignOut = () => {
    Swal.fire({
      title: 'Bạn có muốn đăng xuất',
      // text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Có',
      cancelButtonText: "Hủy bỏ"
    }).then((result) => {
      if (result.value) {
        // Swal.fire(
        //   'Deleted!',
        //   'Your file has been deleted.',
        //   'success'
        // )
        localStorage.removeItem("userClient");
        window.location.reload();
      }
    })
  }
  render() {
    let { taiKhoan } = this.state;
    if (localStorage.getItem("userClient")) {
      taiKhoan = JSON.parse(localStorage.getItem("userClient"));
    }
    return (
      <header className="header">
        {/* Collapsing The Navigation Bar */}
        <nav className="navbar navbar-expand-md">
          <Link className="navbar-brand" to="#">
            <img
              src={logo}
              alt=""
              className="img-fluid"
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarHomeMovie"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            {/* <span className="navbar-toggler-icon" /> */}
            <img src="https://123phim.vn/app/assets/img/icons/menu-options.png" alt=""
              className="img-fluid" style={{ width: '25px' }} />
          </button>
          <div className="collapse navbar-collapse" id="navbarHomeMovie">
            <ul className="navbar-nav mr-auto center headerMenu nav align-items-center">
              <li className="nav-item">
                <a className="nav-link" href="/#filmblock">
                  Showtime <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/#cinemablock">
                  Cinemas
          </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/#newsblock">
                  News
          </a>
              </li>
              <li className="nav-item mr-md-0 mr-xl-5">
                <NavLink className="nav-link" to="/member">
                  Members
          </NavLink>
              </li>
            </ul>
            <ul className="navbar-nav mr-2 center headerRight">
              <li className="nav-item d-md-flex align-items-md-center">
                <Link className="nav-link" to="" data-toggle="modal" data-target="#modal-login">
                  <span>{taiKhoan !== "" ? `Hello ${taiKhoan}` : "Sign In/ Sign Up"}</span>
                </Link>
                {JSON.parse(localStorage.getItem("userClient")) !== null ? <i class="fa fa-sign-out-alt ml-2" onClick={this.handleSignOut}></i> : ""}

              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle  pt-1"
                  to="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <img
                    src="https://123phim.vn/app/assets/img/icons/location-header.png"
                    alt=""
                    className="img-fluid"
                  />
                  <span>Ho chi minh</span>
                </Link>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <Link className="dropdown-item" to="#">
                    Ho chi minh
            </Link>
                  <Link className="dropdown-item" to="#">
                    Ha noi
            </Link>
                  {/* <div class="dropdown-divider"></div> */}
                  <Link className="dropdown-item" to="#">
                    Hai phong
            </Link>
                  <Link className="dropdown-item" to="#">
                    Da nang
            </Link>
                  <Link className="dropdown-item" to="#">
                    Bien hoa
            </Link>
                  <Link className="dropdown-item" to="#">
                    Nha trang
            </Link>
                </div>
              </li>
            </ul>
          </div>
        </nav>
        <ModalLogin handleShowAccount={this.handleShowAccount} />
      </header>
    );
  }
}

export default Navbar;
