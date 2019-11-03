import React, { Component } from 'react';
import * as action from './../../redux/action/index';
import { connect } from 'react-redux';
import Cinema from '../../components/Cinema';


class ListCinemas extends Component {
    componentDidMount() {
        this.props.onSaveListCinema();
    }

    renderSource = () => {
        let { listCinemas } = this.props;
        return listCinemas.map((item, index) => {
            if (index < 6) {
                return <Cinema key={index} cinema={item} />
            }
        })

    }

    render() {
        return (
            <div className="container">
                <h3 className="text-white">Cụm Rạp</h3>
                <div className="row justify-content-between">
                    {this.renderSource()}
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        listCinemas: state.cinemaReducer.listCinemas
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onSaveListCinema: (id) => {
            dispatch(action.actOnSaveListCinemaAPI(id));
        }

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ListCinemas);
