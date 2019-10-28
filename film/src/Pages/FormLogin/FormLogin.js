import React, { Component } from 'react'
import FormSignUp from './FormSignUp';


export default class FormLogin extends Component {
    render() {
        return (
            <div>
                {/* Button trigger modal */}
                <button type="button" className="btn" data-toggle="modal" data-target="#modelId">
                    Đăng ký
                </button>
                {/* Modal */}
                <div className="modal fade" id="modelId" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">
                                    <img src={require('./../../img/web-logo.png')} />
                                </h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <FormSignUp />
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        )
    }
}

