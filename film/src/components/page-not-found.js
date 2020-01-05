import React, { Component } from 'react';

class PageNotFound extends Component {
    render() {
        return (
            <div>
                <div className="wrap">
                    <div className="logo">
                        <img src={require('./../img/404.png')} alt />
                        <p><a href="#">Go back to Home</a></p>
                    </div>
                </div>
            </div>
        )
    }
}
export default PageNotFound;