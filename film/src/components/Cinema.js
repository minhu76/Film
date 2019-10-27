import React, { Component } from 'react';


export default class Cinema extends Component {
    render() {
        let { cinema } = this.props;
        return (
            <div className="card-columns">
                <div className="card">
                    <img src={cinema.logo} width={"70px"} height={"70px"} />
                    {/* <div className="card-body">
                        <h4 className="card-title">{cinema.maHeThongRap}</h4>
                        <p className="card-text">{cinema.tenHeThongRap}</p>
                    </div> */}
                </div>
            </div>
        )
    }
}
