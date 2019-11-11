import React, { Component } from 'react'

export default class News extends Component {
    render() {
        return (
            <div className="card container-fluid bg-dark text-white">
                <div className="row">
                    <div className="col-sm-6">
                        <img src={require('./../../img/tintuc-3.jpg')} width={500}  height={350} />
                        <div class="card-body">
                            <h4 class="card-title">Terminator: Dark Fate - Phim hành động nghẹt thở tới mức cần thuốc trợ tim</h4>
                            <p class="card-text">Terminator: Rise of the Machines (2003) trở đi và là phần hậu truyện trực tiếp của Terminator: Judgment Day (1991). Sau khi phá hủy được Skynet, John Connor (Edward Furlong) bất ngờ bị một T-800 (Arnold Schwarzenegger) khác giết chết. Đến thời điểm hiện tại, Grace (Mackenzie Davis) </p>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <img src={require('./../../img/tintuc-4.jpg')} width={520}  height={350}/>
                        <div class="card-body">
                            <h4 class="card-title">Zombieland: Double Tap - Tận thế chưa bao giờ vui đến thế !!</h4>
                            <p class="card-text">Zombieland: Double Tap lấy bối cảnh 10 năm sau phần đầu tiên. Lúc này, bộ tứ Columbus (Jesse Eisenberg), Tallahassee (Woody Harrelson), Wichita (Emma Stone) và Little Rock (Abigail Breslin) đã trở thành một gia đình cũng như bậc thầy trong việc săn thây ma</p>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
