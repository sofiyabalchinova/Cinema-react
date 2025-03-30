import { Movie } from "./Movie";
import { Link } from "react-router";

export function Movies(props){
    const { movies = [] } = props;
    return(
        <div className = "movies">
            {movies.length ? (
                movies.map((movie) => (
                <Link to={`/movie/${movie.imdbID}`}>
                    <Movie key = {movie.imdbID} {...movie} />
                </Link>
            ))) : (
                // <h4>Not found</h4>
                <div class = "picture">
                    <img src = "https://admiral.digital/wp-content/uploads/2023/08/404_page-not-found.png"></img>
                </div>
            )}
        </div>
    )
}
