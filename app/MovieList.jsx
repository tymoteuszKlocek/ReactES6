import React from 'react';
import MyButton from './MyButton.jsx';
import Movie from './Movie.jsx';

export default class MovieList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ""
        };
        this.handleSearch = this.handleSearch.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSearch() {
        this.props.updateSearch(this.state.value);
    }

    render() {
        var movieArray = this.props.movieArray;
        var moviesTitleArr = this.props.moviesTitleArr;
        var deleteMovieItem = this.props.deleteMovieItem;
        var searchById = this.props.searchById;
        var clearStorage = this.props.clearStorage;
        var demo = this.props.demo;
        if(!moviesTitleArr) {
            <div>loading...</div>
        }
        return (
            <div>
                <button onClick={clearStorage}>Delete List</button>&emsp;
                <button onClick={demo}>DEMO</button><br/><br/>
                <span>Write movie title or part of it for searching</span><br/> 
                <input  type="text"
                        placeholder="write title or any word"
                        onChange={this.handleChange}
                        />&emsp; 
                <button onClick={this.handleSearch}> Search</button><hr/>
                {
                    <ol>
                        {
                            moviesTitleArr.map(function(movie, i) {
                                return  (
                                    <li key={i}> {movie.Title} &emsp;
                                        <MyButton movieId={movie.imdbID} 
                                                  searchById={searchById}
                                                  onClick={searchById}>add to list</MyButton>
                                    </li>
                                )
                            })
                        }
                    </ol>
                }
                <h3>Your movies:</h3>
                <p>Total: {movieArray.length}</p>
                {
                    movieArray.map(function(object, i) {
                        return <Movie 
                                    movieObj={object} 
                                    key={i} 
                                    movieIndex={i} 
                                    deleteMovie={deleteMovieItem} 
                                />
                    }) 
                }
            </div>
        )
    }
}

MovieList.propTypes = {
    movieArray: React.PropTypes.array.isRequired,
    moviesTitleArr: React.PropTypes.array.isRequired,
    deleteMovieItem: React.PropTypes.func.isRequired,
    searchById: React.PropTypes.func.isRequired,
    updateSearch: React.PropTypes.func.isRequired,
    clearStorage: React.PropTypes.func.isRequired
}