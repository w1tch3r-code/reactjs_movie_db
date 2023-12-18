import { v4 as uuidv4 } from "uuid";
import PropTypes from "prop-types";
import MovieItem from "./MovieItem";

const MovieList = ({ allMovies, searchInput }) => {

	return (
		<section className="movie__output__wrapper">
			{allMovies.length > 1 ? (
				<>
					{allMovies.map((movie) => (
						<MovieItem
							key={uuidv4()}
							title={movie.title}
							year={movie.year}
							director={movie.director}
							duration={movie.duration}
							rate={movie.rate}
							genre={movie.genre.join(" • ")}
						/>
					))}
				</>
			) : (
				<article className="errorOutput">
					<p>&#9888;</p>
					<h3>Der Film &bdquo;{searchInput}&ldquo; wurde nicht gefunden.</h3>
				</article>
			)}
		</section>
	);
};

MovieList.propTypes = {
	allMovies: PropTypes.array.isRequired,
	searchInput: PropTypes.string.isRequired,
};

export default MovieList;
