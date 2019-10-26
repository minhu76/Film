import React, { Component } from 'react'

export default class Login extends Component {
    render() {
        return (
            <div>
                <div>
                    {/* Button trigger modal */}
                    <button className="myButton" type="button" data-toggle="modal" data-target="#exampleModalScrollable">
                        Đăng nhập
                    </button>
                    {/* Modal */}
                    <div className="modal fade" id="exampleModalScrollable" tabIndex={-1} role="dialog" aria-labelledby="exampleModalScrollableTitle" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-scrollable" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title">
                                        <img src={require('../img/web-logo.png')} />
                                    </h5>
                                </div>
                                <div className="modal-body">
                                    <div className="container">
                                        <div className="modal-body">
                                            <span className="text-justify text-dark">
                                                Vui lòng đăng nhập trước khi mua vé để tích lũy điểm, cơ hội nhận thêm nhiều ưu đãi từ chương trình thành viên của 123Phim
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="modal-body">
                                    <div className="form-group">
                                        <div className="input-group mb-2">
                                            <div className="input-group-prepend">
                                                <div className="input-group-text">
                                                    <i className="fa fa-user"></i>
                                                </div>
                                            </div>
                                            <input type="text" className="form-control" id="inlineFormInputGroup" placeholder="Username" />
                                        </div>
                                        <div className="input-group mb-2">
                                            <div className="input-group-prepend">
                                                <div className="input-group-text">
                                                    <i className="fa fa-unlock"></i>
                                                </div>
                                            </div>
                                            <input type="text" className="form-control" id="inlineFormInputGroup" placeholder="Password" />
                                        </div>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-danger container">Quên mật khẩu</button>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-primary container">Đăng nhập</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div >
        )
    }
}
