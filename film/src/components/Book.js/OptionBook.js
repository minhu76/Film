import React, { Component, Fragment } from 'react';
import * as action from '../../redux/action/index';
import { connect } from 'react-redux';
import _listbook from './../../SCSS/Components/Book/_listbook.scss';

class OptionBook extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            isSelect: this.props.isSelect
        })
    }
  
    componentWillReceiveProps(nextProps) {
        if (nextProps.isSelect !== this.props.isSelect) {
            this.props.detailCinema(nextProps.isSelect)
            console.log(nextProps);
        }
    }
    componentDidMount() {
        this.props.detailCinema(this.props.isSelect);
    }
    renderCinema = () => {
        if (this.props.cinema.heThongRapChieu) {
            return this.props.cinema.heThongRapChieu.map((item, index) => {
                return (
                    <Fragment key={index}>
                        <Fragment>
                            {item.cumRapChieu.map((item, index) => {
                                return <Fragment key={index}>
                                    <option>{item.tenCumRap}</option>
                                </Fragment>
                            })}
                        </Fragment>
                    </Fragment>
                )
            })
        }
    }

    renderDate = () => {
        return this.props.cinema.map((item, index) => {
            return <Fragment key={index}>{new Date(item.ngayChieuGioChieu).toLocaleDateString()}</Fragment>
        })
    }
    renderTime = () => {
        return this.props.cinema.map((item, index) => {
            return <Fragment key={index}>{new Date(item.ngayChieuGioChieu).toLocaleTimeString()}</Fragment>
        })
    }

    render() {
        return (
            <Fragment>
                <div className="form-group">
                    <select className="my__bookSelect form-control">
                        <option className="my__bookOption">Rạp</option>
                        {this.renderCinema()}
                    </select>
                </div>
                <div className="form-group">
                    <select className="my__bookSelect form-control">
                        <option className="my__bookOption">Ngày xem</option>
                        {this.renderDate()}
                    </select>
                </div>
                <div className="form-group">
                    <select className="my__bookSelect form-control">
                        <option className="my__bookOption">Suất chiếu</option>
                        {this.renderTime()}
                    </select>
                </div>
            </Fragment>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        cinema: state.movieReducer.cinema
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        detailCinema: (id) => {
            dispatch(action.actDetailMovieAPI(id));
        }

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(OptionBook);