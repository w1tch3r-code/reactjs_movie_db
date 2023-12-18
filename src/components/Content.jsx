import { useEffect, useState, useMemo } from "react";
import movieData from "../data/movieData.json";
import MovieList from "./MovieList";
import ButtonToTop from "./ButtonToTop";

const Content = () => {
	const [movie, setMovie] = useState(movieData);
	const [searchInput, setSearchInput] = useState("");

	// Wenn movieDataCopy nicht von externen Faktoren abhängt und sich während der Lebensdauer der Komponente nicht ändert, ist es korrekt, das Dependencies-Array von useMemo leer zu lassen. Das bedeutet, dass useMemo den Wert nur einmal berechnet und dann beibehält, solange die Komponente nicht erneut gerendert wird.
	const movieDataCopy = useMemo(() => [...movieData], []);

	// ==========================================================
	// 						Form function to prevent submission
	// ==========================================================

	const handleSubmit = (e) => {
		e.preventDefault();
	};

	// ==========================================================
	// 						useEffect – Search Movies Function
	// ==========================================================
	useEffect(() => {
		const searchInputLc = searchInput.toLowerCase();
		const matchingMovies = movieDataCopy.filter((singleMovie) => {
			if (singleMovie.title.toLowerCase().includes(searchInputLc)) {
				return singleMovie.title;
			}
		});
		setMovie(matchingMovies);
	}, [searchInput, movieDataCopy]);

	// ==========================================================
	// 									Sort Movies Functions
	// ==========================================================

	const sortYearUp = () => {
		const sortedMovies = [...movieDataCopy].sort(
			(movieA, movieB) => movieA.year - movieB.year
		);
		setMovie(sortedMovies);
	};

	const sortYearDown = () => {
		const sortedMovies = [...movieDataCopy].sort(
			(movieA, movieB) => movieB.year - movieA.year
		);
		setMovie(sortedMovies);
	};

	const sortBestRate = () => {
		const sortedMovies = [...movieDataCopy].sort(
			(movieA, movieB) => movieB.rate - movieA.rate
		);
		setMovie(sortedMovies);
	};

	const sortLettersAsc = () => {
		const sortedMovies = [...movieDataCopy].sort((movieA, movieB) =>
			movieA.title > movieB.title ? 1 : -1
		);
		setMovie(sortedMovies);
	};

	const sortLettersDesc = () => {
		const sortedMovies = [...movieDataCopy].sort((movieA, movieB) =>
			movieA.title < movieB.title ? 1 : -1
		);
		setMovie(sortedMovies);
	};

	return (
		<>
			<header className="movie__search__wrapper">
				<h1>Movies for you</h1>
				<h2>The best MovieDB</h2>
				<form onSubmit={handleSubmit}>
					<div className="search">
						<input
							onChange={(e) => setSearchInput(e.target.value)}
							value={searchInput}
							type="search"
							id="movie"
							name="q"
							placeholder="SEARCH MOVIES BY TITLE"
						/>
					</div>
				</form>
				<div className="filter">
					<button type="button" onClick={() => sortYearUp()}>
						Sort by Year &#8679;
					</button>
					<button type="button" onClick={() => sortYearDown()}>
						Sort by Year &#8681;
					</button>
					<button type="button" onClick={() => sortBestRate()}>
						Best Rate &#9734;
					</button>
					<button type="button" onClick={() => sortLettersAsc()}>
						A-Z
					</button>
					<button type="button" onClick={() => sortLettersDesc()}>
						Z-A
					</button>
				</div>
			</header>
			<main>
				<MovieList allMovies={movie} searchInput={searchInput} />
				<ButtonToTop />
			</main>
		</>
	);
};

export default Content;
