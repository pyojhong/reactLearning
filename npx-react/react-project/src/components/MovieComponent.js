import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

function MovieComponent({id, image, name, summary, genres}) {
    return (
            <div>
                <img src={image.medium} alt={name}/>
                <h2>
                    <Link to={`/movie/${id}`}>{name}</Link>
                </h2>
                <p>{summary}</p>
                <ul>
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