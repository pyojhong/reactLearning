import { useState, useEffect } from "react";
import MovieComponent from "../components/MovieComponent";

function Home() {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        const url = 'https://api.tvmaze.com/shows';
        fetch(url)
        .then(response => response.json())
        .then(data => {
            setMovies(data);
            setLoading(false);
        });
    
    }, []);
    console.log(movies);
    return (
        <div>
            {loading ? <h1>로딩 중...</h1> : 
                <div>
                    {movies.map((movie) => <MovieComponent key={movie.id} id={movie.id} image={movie.image} name={movie.name} summary={movie.summary} genres={movie.genres}/>) }
                </div>}
        </div>
    );
}

export default Home;