import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// 파라미터로 전달되는 값을 확인할 수 있는 기능
import styles from '../styles/Detail.module.css';

function Detail() {
    const [loading, setLoading] = useState(true);
    const [movie, setMovie] = useState({});

    const { id } = useParams();
    const getMovie = async () => {
        const json = await fetch(`https://api.tvmaze.com/shows/${id}`);
        const data = await json.json();
        console.log(data);
        setMovie(data);
        setLoading(false);
    };

    useEffect(() => {
        getMovie();    
    }, []);
    console.log(id);
    return (
        <div>
            {loading ? <h1>로딩 중...</h1> : 
                <div>
                    <img src={movie.image?.medium} alt={movie.name}></img>
                    <h1>{movie.name}</h1>
                    <div>
                        {movie.genres.map((g) => (
                            <span key={g}>{g} </span>
                        ))}
                    </div>
                    <h3>평균 별점: {movie.rating.average}</h3>
                    <p>언어 : {movie.language}</p>
                    <p>상영 : {movie.status}</p>
                    <p>내용 : {movie.summary?.replace(/<[^>]*>?/g, '')}</p>

                </div>}
        </div>
    );
}

export default Detail;