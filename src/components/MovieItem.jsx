import PropTypes from 'prop-types';

const MovieItem = ({ title, year, director, duration, rate, genre }) => {
	return (
		<article className="article__movie">
			<h3>{title}</h3>
			<p><span>Year:</span> {year}</p>
			<p><span>Regisseur:</span><br />{director}</p>
			<p><span>Running Time:</span><br />{duration} &#128337;</p>
			<p><span>Genre:</span><br />{genre}</p>
			<p><span>Rating:</span> {rate} &#9734;</p>
		</article>
	);
};

MovieItem.propTypes = {
  title: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  director: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
  rate: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
}

export default MovieItem;
