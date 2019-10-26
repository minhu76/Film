import React, { Component } from 'react';
import _footer from './../../SCSS/Components/Footer/_footer.scss';

export default class Footer extends Component {
    render() {
        return (
            <footer className="footer myFooter">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6 col-md-3">
                            <div className="footer__item">
                                <h3>Hỗ Trợ</h3>
                                <ul className="list-unstyled myList">
                                    <li><a href="#">Góp ý</a></li>
                                    <li><a href="#">Sale and Services</a></li>
                                    <li><a href="#">Rạp/Giá vé</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-3">
                            <div className="footer__item">
                                <h3>Về 123Phim</h3>
                                <ul className="list-unstyled myList">
                                    <li><a href="#">Về chúng tôi</a></li>
                                    <li><a href="#">Điều lệ sử dụng</a></li>
                                    <li><a href="#">Quy chế hoạt động</a></li>
                                    <li><a href="#">Chính sách bảo mật</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-3">
                            <div className="footer__item">
                                <h3>Góc Điện Ảnh</h3>
                                <ul className="list-unstyled">
                                    <li><a href="#">Thể loại phim</a></li>
                                    <li><a href="#">Phim hay tháng</a></li>
                                    <li><a href="#">Bình luận Phim</a></li>
                                    <li><a href="#">Tin tức/Sự kiện</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-3">
                            <div className="footer__item">
                                <h3>Kết Nối</h3>
                                <ul className="list-unstyled">
                                    <li><a href="#"><i className="fa fa-facebook-f" />Facebook</a></li>
                                    <li><a href="#"><i className="fa fa-twitter" />Twitter</a></li>
                                    <li><a href="#"><i className="fa fa-google-plus" />Google +</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="copyright border-top border-secondary mt-4">
                        <p className="py-3 mb-0 myCopyright">2019 © 123Phim/Web design by Minhu</p>
                    </div>
                </div>
            </footer>

        )
    }
}
