import React, { useContext, useState } from 'react';
import MovieList from './MovieList';
import { MovieListsContext } from './contexts/MovieListsContext';
import Button from '@material-ui/core/Button';
import MovieViewerNav from './MovieViewerNav';

export default function MovieListViewer(props) {
	const listId = props.match.params.listId;
	const { movieLists, selectMovieList, clearSelectedMovies } = useContext(MovieListsContext);
	const movieList = movieLists.find((ml) => ml.id === listId);
	const [ edit, setEdit ] = useState(false);
	const toggleEdit = () => {
		if (!edit) {
			selectMovieList(listId);
			setEdit(true);
		} else {
			clearSelectedMovies();
			setEdit(false);
		}
	};
	return (
		<div>
			<MovieViewerNav movieList={movieList} />
			<h1>Viewing movies in {listId}</h1>
			<Button variant="contained" onClick={toggleEdit}>
				Edit
			</Button>
			<MovieList mode={edit ? 'edit' : 'view'} movies={movieList.movies} />
		</div>
	);
}