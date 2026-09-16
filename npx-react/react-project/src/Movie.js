import {useEffect, useState} from 'react';

function Movie() {
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
            {loading ? <h1>로딩 중...</h1> : <div>{movies.map(movie => 
                    <div key={movie.id}>
                        <img src={movie.image.medium} />
                        <h2>{movie.name}</h2>
                        <p>{movie.summary}</p>
                        <ul>
                            {movie.genres.map(g => <li key={g}>{g}</li>)}
                        </ul>
                    </div>)}
                </div>}
        </div>
    );
}

export default Movie;