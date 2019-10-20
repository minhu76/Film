import React, { Component } from 'react';
import './footer.css';

export default class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6 col-md-3 mb-3">
                            <div className="footer__item">
                                <h3>GET IN TOUCH</h3>
                                <ul className="list-unstyled">
                                    <li><a href="#">FAQs</a></li>
                                    <li><a href="#">Give us feedback</a></li>
                                    <li><a href="#">Contact us</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-3 mb-3">
                            <div className="footer__item">
                                <h3>ABOUT MOVIE STAR</h3>
                                <ul className="list-unstyled">
                                    <li><a href="#">About us</a></li>
                                    <li><a href="#">Find us</a></li>
                                    <li><a href="#">Schedule</a></li>
                                    <li><a href="#">News</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-3 mb-3">
                            <div className="footer__item">
                                <h3>LEGAL STUFF</h3>
                                <ul className="list-unstyled">
                                    <li><a href="#">Terms &amp; Conditions</a></li>
                                    <li><a href="#">Privacy policy</a></li>
                                    <li><a href="#">Cookie policy</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-3 mb-3">
                            <div className="footer__item">
                                <h3>CONNECT WITH US</h3>
                                <ul className="list-unstyled">
                                    <li><a href="#"><i className="fa fa-facebook-f" />Facebook</a></li>
                                    <li><a href="#"><i className="fa fa-twitter" />Twitter</a></li>
                                    <li><a href="#"><i className="fa fa-google-plus" />Google +</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="copyright border-top border-secondary mt-4">
                        <p className="py-3 mb-0 text-white">2019 © FilmLayout/ <a href="#" className="text-white">Web design by Minhu</a></p>
                    </div>
                </div>
            </footer>

        )
    }
}
