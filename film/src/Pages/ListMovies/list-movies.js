import React, { Component, Fragment } from 'react';
import Movie from "./../../components/Movie";

class ListMovies extends Component {
  showMovies = () => {
    let { listChildMovies } = this.props;
    console.log(listChildMovies);
    if(listChildMovies){
      return listChildMovies.map((item, index) => {
        return <Movie movie={item} key={index} handleSrcModalMovie={this.props.handleSrcModalMovie} />
      })
    }
  }
  render() {
    return (
      <Fragment>
        {this.showMovies()}
      </Fragment>


    );
  }
}
export default ListMovies;