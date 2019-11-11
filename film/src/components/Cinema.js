import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Cinema extends Component {
    render() {
        let { cinema } = this.props;
        return (
                    <NavLink to={`/detail-cinema/${cinema.maHeThongRap}`}>
                        <img src={cinema.logo} width={"60px"} height={"60px"} />
                    </NavLink>
        )
    }
}
