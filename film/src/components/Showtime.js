import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

export default class Showtime extends Component {
    render() {
        let { showtime } = this.props;
    
        return (
                <NavLink to={`/detail-showtime/${showtime.maRap}`}>
                    {showtime.tenRap}
                </NavLink>
            
        )
    }
}
