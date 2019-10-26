import React, { Component } from 'react'

export default class SignUp extends Component {
    render() {
        return (
            <div>
                <div>
                    {/* Button trigger modal */}
                    <button className="myButton" type="button" data-toggle="modal" data-target="#exampleModalScrollable1">
                        Đăng Ký
                    </button>
                    {/* Modal */}
                    <div className="modal fade" id="exampleModalScrollable1" tabIndex={-1} role="dialog" aria-labelledby="exampleModalScrollableTitle" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-scrollable" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title">
                                        <img src={require('../img/web-logo.png')} />
                                    </h5>
                                </div>
                                <div className="modal-body">
                                    <div className="form-group">
                                        <input type="text" name id className="form-control" placeholder="Tài khoản" aria-describedby="helpId" />
                                    </div>
                                    <div className="row">
                                        <div className="col-6">
                                            <div className="form-group">
                                                <input type="text" name id className="form-control" placeholder="Mật khẩu" aria-describedby="helpId" />
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div className="form-group">
                                                <input type="text" name id className="form-control" placeholder="Xác nhận mật khẩu" aria-describedby="helpId" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <input type="text" name id className="form-control" placeholder="Họ tên" aria-describedby="helpId" />
                                    </div>
                                    <div className="row">
                                        <div className="col-6">
                                            <div className="form-group">
                                                <input type="text" name id className="form-control" placeholder="Số điện thoại" aria-describedby="helpId" />
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div className="form-group">
                                                <select className="form-control" name="" id="">
                                                    <option>Nam</option>
                                                    <option>Nữ</option>
                                                    <option>3D</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <input type="text" name id className="form-control" placeholder="Email" aria-describedby="helpId" />
                                    </div>
                                    <div className="form-group">
                                        <input type="text" name id className="form-control" placeholder="Địa chỉ" aria-describedby="helpId" />
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-primary container">Đăng Ký</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
