import React from 'react';
import Thumb from './Thumb.jsx';
import MovieInfo from './MovieInfo.jsx';

var styles = {
    padding: '1em',
    border: '1px solid lightGray',
};
var styleAfter = {
    content: '',
    dipslay: 'block',
    clear: 'both'
}

export default class Movie extends React.Component {
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }
    onClick() {
        var movieIndex = this.props.movieIndex;
        this.props.deleteMovie(movieIndex);
    }
    render() {
        return (
            <div style={styles}>
                <Thumb src={this.props.movieObj.Poster} />
                <MovieInfo movieObj={this.props.movieObj} onClick={this.onClick}/>
                <button onClick={this.onClick}>delete</button>
                <div style={styleAfter}></div>
            </div>
        )
    }
}

Movie.propTypes = {
    movieObj: React.PropTypes.object.isRequired,
    deleteMovie: React.PropTypes.func.isRequired,
    movieIndex: React.PropTypes.number.isRequired
}