import React, { Component } from 'react'

export default class Rule extends Component {
    render() {
        return (
            <div>
                <p>Chương trình thành viên thân thiết Galaxy là chương trình ưu đãi dựa trên điểm tích lũy của các thành viên Galaxy: Teen star, GStar. Thành viên tích lũy điểm dựa trên giá trị chi tiêu tại các cụm rạp Galaxy (tại cụm rạp & trực tuyến). Hình thức tích lũy điểm như sau:
                <img src={require('./../../img/tichdiem1.png')} width={"400px"} height={"150px"}/>
                <img src={require('./../../img/thele-02.jpg')} width={"700px"} height={"200px"}/>
                <img src={require('./../../img/chinhsachdoiqua.jpg')} width={"500px"} height={"400px"}/>
                </p>
                <p>
                Ghi chú: Thông tin định danh thành viên gồm email và số điện thoại bắt buộc phải hợp lệ. Email không hợp lệ là email không có thực tại thời điểm Galaxy Cinema rà soát dữ liệu thành viên. Số điện thoại không hợp lệ là số điện thoại không liên lạc được hoặc số điện thoại không thuộc sở hữu của chủ tài khoản thành viên GStar ở thời điểm Galaxy ra soát dữ liệu thành viên. Với các trường hợp không hợp lệ, Galaxy Cinema có quyền xóa tài khoản thành viên mà không cần thông báo trước. Các tài khoản không có thông tin định danh gồm email và số điện thoại hợp lệ, Galaxy Cinema có quyền xóa tài khoản mà không cần báo trước. Điểm tích lũy có giá trị áp dụng tại tất cả các rạp Galaxy Cinema trên toàn quốc. Quà tặng được đổi bằng điểm tích lũy của thành viên và không phải bù thêm tiền Không giới hạn số lượng quà tặng được đổi.
                </p>
            </div>
        )
    }
}
