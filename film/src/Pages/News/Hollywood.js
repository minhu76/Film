import React, { Component } from 'react'
import _listnews from './../../SCSS/Components/News/_listnews.scss';

export default class Hollywood extends Component {
    render() {
        return (
            <div className="card my-listnew">
                <div className="row my-listnew">
                    <div className="col-sm-6">
                        <img src={require('./../../img/tintuc-1.jpg')} width={500} height={350} />
                        <div class="card-body">
                            <h4 class="card-title">Sau 10 ngày khởi chiếu, Joker đã thu về gần 60 tỷ đồng</h4>
                            <p class="card-text">Với sự đầu tư tâm huyết, nhạc phim xuất sắc, góc quay tuyệt vời kết hợp với màn diễn xuất đỉnh cao của Joaquin Phoenix, Joker đã chiến thắng ở hạng mục Phim hay nhất tại Liên hoan phim Venice 2019</p>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <img src={require('./../../img/tintuc-2.jpg')} width={520} height={350} />
                        <div class="card-body">
                            <h4 class="card-title">Sony và Disney 'chia tay đòi Spider-Man' - Ai là người chịu thiệt?</h4>
                            <p class="card-text">“Mối lương duyên” giữa Disney và Sony từ Captain America: Civil War (2016) đã kết thúc trong tranh cãi khi cả hai không tìm được tiếng nói chung trong các thỏa thuận tiếp theo. </p>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
