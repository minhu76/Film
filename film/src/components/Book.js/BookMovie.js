import React, { Component, Fragment } from 'react';
import * as action from './../../redux/action/index';
import { connect } from 'react-redux';
import _listbook from './../../SCSS/Components/Book/_listbook.scss';
import OptionBook from './OptionBook';

class BookMovie extends Component {
    constructor(props) {
        super(props)
        this.state = {
            optionmovie: ''
        }
    }

    handleOnChange() {
        this.setState({
            optionmovie: this.refs.optionmovie.value
        })
    }
    renderSource = () => {
        let { listMovies } = this.props;
        return listMovies.map((item, index) => {
            return <option value={item.maPhim} key={index} isSelect={item}>{item.tenPhim}</option>
        })
    }
    render() {
        return (
            <div>
                <div className="form-group">
                    {/* <div className="container d-flex justify-content-between align-items-center my__listBook">
                    <div className="my__bookDetail"> */}
                    <select className="my__bookSelect form-control" onChange={(e) => { this.handleOnChange() }} ref="optionmovie">
                        <option className="my__bookOption">Phim</option>
                        <Fragment>
                            {this.renderSource()}
                        </Fragment>
                    </select>
                </div>
                <div>
                    <OptionBook isSelect={this.state.optionmovie} />
                </div>
            </div>  
        )
    }
}
const mapStateToProps = (state) => {
    return {
        listMovies: state.movieReducer.listMovies
    }   
}
const mapDispatchToProps = (dispatch) => {
    return {
        onSaveListMovie: () => {
            dispatch(action.actOnSaveListMovieAPI());
        }

    };
};
export default connect(mapStateToProps, mapDispatchToProps)(BookMovie);