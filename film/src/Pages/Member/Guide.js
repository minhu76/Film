import React, { Component } from 'react';

export default class Guide extends Component {
    render() {
        return (
            <div>
                <p>Với 3 bước đơn giản để trở thành viên Galaxy</p>
                <img src={require('./../../img/huongdan.png')} width={"800px"}  height={"400px"}/>
                <p></p>
            </div>
        )
    }
}
