import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Cinema extends Component {
    render() {
        let { cinema } = this.props;
        return (
            <div>
                <NavLink to={`/detail-cinema/${cinema.maHeThongRap}`}>
                    <img src={cinema.logo} width={"40px"} height={"40px"} />
                </NavLink>
            </div>
        )
    }
}
