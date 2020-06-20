import React, { useState, useEffect } from 'react';
import Movie from "./Movie";
import './ListMovies.css'; // styles for ListMovie component

function ListMovies(props) {

    // calling useEffect on Mount of Component
    useEffect(() => {
        // url for Studio Ghibli API
        fetch('https://ghibliapi.herokuapp.com/films')
            .then(res => res.json())
            // updates state using setMovies
            .then(res => setMovies(res));
    }, []);

    // initialize state and function to set state using the useState Hook
    const [movies, setMovies] = useState([]);
    return (
        <div className="main">
            <h1 className="title">Studio Ghibli With React Hooks!</h1>
            <div className="movies">
                {/* Map elements of movies onto Cards */}
                {movies.map(movie =>
                    <Movie
                        // Add Props to Movie Card
                        classname="movie"
                        title={movie.title}
                        description={movie.description}
                        director={movie.director}
                        rating={movie.rt_score}
                    />
                )}
            </div>
        </div>
    );
}

export default ListMovies;