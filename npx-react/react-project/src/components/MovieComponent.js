import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import styles from '../styles/MovieComponent.module.css'
;
function MovieComponent({id, image, name, summary, genres}) {
    const cleanSummary = summary.replace(/<[^>]*>?/g, '');
    return (
            <div className={styles.card}>
                <img className={styles.img} src={image.medium} alt={name}/>
                <h2 className={styles.title}>
                    <Link to={`/movie/${id}`}>{name}</Link>
                </h2>
                <p className={styles.summary}>{cleanSummary.length > 235 ? `${cleanSummary.slice(0, 235)}...` : cleanSummary}</p>
                <ul className={styles.genres}>
                    {genres.map(g => <li key={g}>{g}</li>)}
                </ul>
            </div>
    );
}

MovieComponent.propTypes = {
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default MovieComponent;