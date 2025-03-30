import React from "react";
import { Movies } from "../components/Movies.jsx";
import { Search } from "../components/search.jsx";
import { Preloader } from "../components/preloader.jsx";



class MovieGrid extends React.Component {
    state = {
        movies: [],
        loading: true,
    };
    componentDidMount(){
        fetch('http://www.omdbapi.com/?apikey=195bb9c1&s=matrix')
        .then((response) => response.json())
        .then((data)=> this.setState({movies: data.Search, loading: false }))
    }
    searchMovies = (str, type = "all") => {
        fetch(`http://www.omdbapi.com/?apikey=195bb9c1&s=${str}${
           type !== "all" ? `&type=${type}` : ""
            }`
        )
        .then((response) => response.json())
        .then((data)=> this.setState({movies: data.Search, loading: false }))
    }
    render(){
        const {movies, loading} = this.state;

        return (
            <main className = "container content">
                <Search searchMovies = {this.searchMovies} />
                {loading ? <Preloader /> : <Movies movies={this.state.movies} />}
                {/* {
                    movies.length ? (
                        <Movies movies = {this.state.movies} />
                    )   : <Preloader />
                } */}
            </main>
        )
    }
}

export {MovieGrid};
