import React, { Component } from 'react';
import * as action from './../../redux/action/index';
import { connect } from 'react-redux';
import _listbook from './../../SCSS/Components/Book/_listbook.scss';

class BookMovie extends Component {
    constructor(props){
        super(props)
        this.state={
            optionmovie: ''
        }
    }
    
    handleOnChange(){
        this.setState({
            optionmovie: this.refs.optionmovie.value
        })
    }
    renderSource = () => {
        let { listMovies } = this.props;
        return listMovies.map((item, index) => {
            return <option ref="optionmovie" key={index} value={item.maPhim}>{item.tenPhim}</option>
        })
    }
    render() {
        console.log(this.props);
       return (
            <div className="my__bookDetail">
                <select className="my__bookSelect form-control" onChange={(e)=>{this.handleOnChange()}}>
                    <option className="my__bookOption">Phim</option>
                    {this.renderSource()}
                </select>
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
            dispatch(action.actDetailCinemaAPI());
        }

    };
};
export default connect(mapStateToProps, mapDispatchToProps)(BookMovie);