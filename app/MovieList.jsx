import React from 'react';
import Movie from './Movie.jsx';
import MyButton from './MyButton.jsx';

export default class MovieList extends React.Component {
    constructor(props) {
        super(props);
        var arr = localStorage.getItem("movieArray") === null ? [] : JSON.parse(localStorage.getItem("movieArray"));
        this.state = {
            title: "",
            movieObj: {},
            movieArray: arr,
            movies: [],
            moviesTitleArr: []
        };
        
        this.addToStorage = this.addToStorage.bind(this);
        this.clearStorage = this.clearStorage.bind(this);
        this.search = this.search.bind(this);
        this.updateSearch = this.updateSearch.bind(this);
        this.deleteMovieItem = this.deleteMovieItem.bind(this);
        this.searchById = this.searchById.bind(this);
        this.demo = this.demo.bind(this);
    }

    displayTitles(movies) {
        var moviesTitleArr = this.state.moviesTitleArr;
        moviesTitleArr.concat(movies);
        this.setState({moviesTitleArr: moviesTitleArr});
    }

    demo() {
        this.addToStorage({"Title":"Batman","Year":"1989","Rated":"PG-13","Released":"23 Jun 1989","Runtime":"126 min","Genre":"Action, Adventure","Director":"Tim Burton","Writer":"Bob Kane (Batman characters), Sam Hamm (story), Sam Hamm (screenplay), Warren Skaaren (screenplay)","Actors":"Michael Keaton, Jack Nicholson, Kim Basinger, Robert Wuhl","Plot":"The Dark Knight of Gotham City begins his war on crime with his first major enemy being the clownishly homicidal Joker.","Language":"English, French","Country":"USA, UK","Awards":"Won 1 Oscar. Another 9 wins & 22 nominations.","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMTYwNjAyODIyMF5BMl5BanBnXkFtZTYwNDMwMDk2._V1_SX300.jpg","Metascore":"69","imdbRating":"7.6","imdbVotes":"272,388","imdbID":"tt0096895","Type":"movie","Response":"True"});
        this.addToStorage({"Title":"Earth","Year":"2007","Rated":"G","Released":"22 Apr 2009","Runtime":"90 min","Genre":"Documentary","Director":"Alastair Fothergill, Mark Linfield","Writer":"Leslie Megahey (narration written by)","Actors":"Anggun, James Earl Jones, Patrick Stewart, Ulrich Tukur","Plot":"Feature-length version of the documentary TV series Planet Earth (2006), following the migration paths of four animal families.","Language":"English","Country":"UK, Germany, USA","Awards":"3 wins & 1 nomination.","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMTUwMzU5NDk3NF5BMl5BanBnXkFtZTcwOTM4MDUwMg@@._V1_SX300.jpg","Metascore":"72","imdbRating":"8.0","imdbVotes":"12,899","imdbID":"tt0393597","Type":"movie","Response":"True"});
        this.addToStorage({"Title":"Fire","Year":"1996","Rated":"UNRATED","Released":"22 Aug 1997","Runtime":"104 min","Genre":"Drama, Romance","Director":"Deepa Mehta","Writer":"Deepa Mehta","Actors":"Karishma Jhalani, Ramanjeet Kaur, Dilip Mehta, Javed Jaffrey","Plot":"Ashok runs a family business that sells takeout food that also has a video rental store at the side. Ashok's extended family includes his wife Radha, his brother Jatin, their ailing mother ...","Language":"English, Hindi","Country":"Canada, India","Awards":"7 wins & 1 nomination.","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMTYxNzc5MzU5NF5BMl5BanBnXkFtZTcwODYyNDYxMQ@@._V1_SX300.jpg","Metascore":"64","imdbRating":"7.3","imdbVotes":"4,800","imdbID":"tt0116308","Type":"movie","Response":"True"});
        this.addToStorage({"Title":"Water","Year":"2005","Rated":"PG-13","Released":"26 May 2006","Runtime":"117 min","Genre":"Drama, Romance","Director":"Deepa Mehta","Writer":"Anurag Kashyap (dialogue), Deepa Mehta","Actors":"Sarala Kariyawasam, Buddhi Wickrama, Rinsly Weerarathne, Iranganie Serasinghe","Plot":"The film examines the plight of a group of widows forced into poverty at a temple in the holy city of Varanasi. It focuses on a relationship between one of the widows, who wants to escape the social restrictions imposed on widows, and a man who is from the highest caste and a follower of Mahatma Gandhi.","Language":"Hindi, Sanskrit","Country":"Canada, India","Awards":"Nominated for 1 Oscar. Another 17 wins & 14 nominations.","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMzIwOTk4Mzk4Nl5BMl5BanBnXkFtZTcwMjc1NTIzMQ@@._V1_SX300.jpg","Metascore":"77","imdbRating":"7.8","imdbVotes":"12,655","imdbID":"tt0240200","Type":"movie","Response":"True"});
        this.addToStorage({"Title":"City of God","Year":"2002","Rated":"R","Released":"13 Feb 2004","Runtime":"130 min","Genre":"Crime, Drama","Director":"Fernando Meirelles, Kátia Lund","Writer":"Paulo Lins (novel), Bráulio Mantovani (screenplay)","Actors":"Alexandre Rodrigues, Leandro Firmino, Phellipe Haagensen, Douglas Silva","Plot":"Two boys growing up in a violent neighborhood of Rio de Janeiro take different paths: one becomes a photographer, the other a drug dealer.","Language":"Portuguese","Country":"Brazil, France","Awards":"Nominated for 4 Oscars. Another 65 wins & 37 nominations.","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMjA4ODQ3ODkzNV5BMl5BanBnXkFtZTYwOTc4NDI3._V1_SX300.jpg","Metascore":"79","imdbRating":"8.7","imdbVotes":"540,033","imdbID":"tt0317248","Type":"movie","Response":"True"}); 
            alert("You've added 5 random movies.");
    }

    addToStorage(movieObj) {
        var movieArray = this.state.movieArray;
        movieArray.push(movieObj);
        localStorage.setItem("movieArray", JSON.stringify(movieArray));
        this.setState({ movieArray: movieArray });
    }

    clearStorage() {
        localStorage.clear();
        this.setState({ movieArray: [] });
    }

    deleteMovieItem(movieIndex) {
        var movieArray = this.state.movieArray;
        movieArray.splice(movieIndex, 1);
        localStorage.setItem("movieArray", JSON.stringify(movieArray));
        this.setState({ movieArray: movieArray });
    }

    updateSearch() {
        this.search(this.refs.query.value);
    }

    search(query = "") {
        var API_URL = 'http://www.omdbapi.com/?s=';
        var FILTER = '&y=&plot=short&r=json';
        if(query !== "") {
            fetch(API_URL + query + FILTER) 
                .then(response=> {
                    var promise = response.json();
                    promise.then(result=> {
                        this.displayTitles(result.Search);
                        this.setState({
                            movies: result.Search
                        });
                    }); 
                });
        }    
    }

    searchById(id = "") {
        var API_URL = 'http://www.omdbapi.com/?i=';
        var FILTER = '&plot=full&r=json';
        if(id !== "") {
            fetch(API_URL + id + FILTER) 
                .then(response=> {
                    var promise = response.json();
                    promise.then(result=> {
                        this.addToStorage(result);
                        this.setState({
                            movieObj: result
                        });
                    }); 
                });
        }    
    }

    render() {
        var movieArray = this.state.movieArray;
        var moviesTitleArr = this.state.movies;
        var deleteMovieItem = this.deleteMovieItem;
        var searchById = this.searchById;

        return ( 
            
            <div>
                <button onClick={this.clearStorage}>Delete List</button>&emsp;<button onClick={this.demo}>DEMO</button><br/><br/>
                <span>Write movie title or part of it for searching</span><br/> 
                <input ref="query" />&emsp; 
                <button onClick={this.updateSearch}> Search</button><hr/>
                {
                    <ol>
                        {
                            moviesTitleArr.map(function(movie, i) {
                                return  (
                                    <li key={movie.Title}> {movie.Title} &emsp;
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
                <p>Total: {this.state.movieArray.length}</p>
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

