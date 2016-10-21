import React from 'react';

var styles = {
    width: '70%',
    display: 'inline-block',
    paddingLeft: '1em',
    boxSizing: 'border-box',
    float: 'left'
};


export default class MovieInfo extends React.Component {
	
	render() {
		var movieObj = this.props.movieObj;
		var title = movieObj.Title;
		var director = movieObj.Director;
		var actors = movieObj.Actors;
		var plot = movieObj.Plot;
		var awards = movieObj.Awards;
		var year = movieObj.Year;
		var lang = movieObj.Language;
		var rate = movieObj.imdbRating;
		var type = movieObj.Genre;

		return (
			<div style={styles}>
				<h3> {title} </h3>
				<p><strong>Year: </strong>{year}</p>
				<p><strong>Director: </strong><span>{director}</span></p>
				<p><strong>Actors: </strong><span>{actors}</span></p>
				<p><strong>Awards: </strong>{awards}</p>
				<p><strong>Plot: </strong>{plot}</p>
				<p>Langage: {lang}</p>
				<h6>Rateing: {rate} &emsp; Type: {type}</h6>
			</div>
		);
	}
}

MovieInfo.propTypes = {
	movieObj: React.PropTypes.object.isRequired
}