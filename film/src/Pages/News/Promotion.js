import React, { Component } from 'react'

export default class Promotion extends Component {
    render() {
        return (
            <div className="card container-fluid bg-dark text-white">
                <div className="row">
                    <div className="col-sm-6">
                        <img src={require('./../../img/promo-1.jpg')} width={500} height={350} />
                        <div class="card-body">
                            <h4 class="card-title">NHẬP MÃ 'PSM30K' - Giảm ngay 30k khi đặt vé Pháp Sư Mù: Ai Chết Giơ Tay</h4>
                            <p class="card-text">Thời gian:
                                                - Bắt đầu: Khi lịch chiếu Pháp Sư Mù: Ai Chết Giơ Tay xuất hiện trên 123Phim.
                                                - Kết thúc: 23h59’ ngày chủ nhật 13.11.2019.
                                                - Trong thời gian khuyến mãi, mỗi giao dịch đặt vé Pháp Sư Mù: Ai Chết Giơ Tay trên ứng dụng 123Phim có nhập mã PSM30K sẽ được giảm 30k trên tổng giao dịch.</p>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <img src={require('./../../img/promo-2.jpg')} width={520} height={350} />
                        <div class="card-body">
                            <h4 class="card-title">[Mega GS] Một đoá hoa thay ngàn lời yêu</h4>
                            <p class="card-text">Chỉ với một cành hoa hồng vào ngày 20.10 cũng sẽ đủ để cho người phụ nữ của bạn cảm thấy hạnh phúc.
                            Hãy đến rạp Mega GS vào cuối tuần này để vừa có thể thưởng thức những bộ phim hay cùng món quà nhỏ là những cành hoa từ rạp.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
