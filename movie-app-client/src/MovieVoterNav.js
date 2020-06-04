import React, { useState, useEffect, useContext } from 'react';
import { useTheme } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import SaveIcon from '@material-ui/icons/Save';
import MenuIcon from '@material-ui/icons/Menu';
import AddIcon from '@material-ui/icons/Add';
import { Link } from 'react-router-dom';
import { CustomThemeContext } from './contexts/CustomThemeContext';
import { MovieListsContext } from './contexts/MovieListsContext';
import { VoteSessionContext } from './contexts/VoteSessionContext';
import useStyles from './styles/NavbarStyles';
import { withRouter } from 'react-router';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Prompt } from 'react-router-dom';

export default function MovieVoterNav(props) {
	const { selectedMovies, clearSelectedMovies } = useContext(MovieListsContext);
	const { submitVote, movieList, stage, voteLimit } = useContext(VoteSessionContext);
	const numSelected = selectedMovies.length;
	const theme = useTheme();
	const classes = useStyles(theme);
	const { isDarkMode, toggleTheme } = useContext(CustomThemeContext);
	const [ openVotedDialog, setOpenVotedDialog ] = useState(false);
	const [ openTiebreakerDialog, setOpenTieBreakerDialog ] = useState(false);

	const handleVote = () => {
		submitVote();
		setOpenVotedDialog(true);
	};

	const closeTiebreakerDialog = () => setOpenTieBreakerDialog(false);

	useEffect(
		() => {
			if (stage === 'vote') {
				setOpenVotedDialog(false);
				setOpenTieBreakerDialog(true);
			}
		},
		[ movieList ]
	);

	useEffect(
		() => {
			if (stage === 'results') {
				setOpenVotedDialog(false);
			}
		},
		[ stage ]
	);

	return (
		<div className={classes.root}>
			<Prompt message="Are you sure you want to leave?" />

			<AppBar className={classes.AppBar} position="fixed">
				<Toolbar>
					<IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
						<MenuIcon />
					</IconButton>
					<Link to="/" className={classes.title}>
						<Typography variant="h5">Movie App</Typography>
					</Link>

					<div className={classes.listButtons} style={{ opacity: numSelected ? 1 : 0 }}>
						<Typography variant="h6">
							{numSelected || 'No'} Movie{numSelected === 1 ? '' : 's'} Selected
						</Typography>
						<Button
							className={classes.navButton}
							variant="contained"
							color="secondary"
							onClick={handleVote}
							startIcon={<SaveIcon />}
						>
							Submit Vote
						</Button>
						<Button
							className={classes.navButton}
							variant="contained"
							color="primary"
							startIcon={<AddIcon />}
							onClick={clearSelectedMovies}
						>
							Clear Selection
						</Button>
					</div>

					<Switch checked={isDarkMode} onChange={toggleTheme} />
				</Toolbar>
			</AppBar>
			<div className={classes.offset} />
			<Dialog open={openVotedDialog} disableEscapeKeyDown disableBackdropClick>
				<DialogTitle style={{ textAlign: 'center' }}>
					<h2>Vote Submitted!</h2>
				</DialogTitle>
				<DialogContent>
					<DialogContentText style={{ fontSize: '1.2rem', textAlign: 'center' }}>
						Your movie selection has been successfully submitted. Waiting for everyone else to finish
						voting...
					</DialogContentText>
				</DialogContent>
			</Dialog>
			<Dialog
				open={openTiebreakerDialog}
				onClose={closeTiebreakerDialog}
				disableEscapeKeyDown
				disableBackdropClick
			>
				<DialogTitle style={{ textAlign: 'center' }}>
					<h2>Tiebreaker!</h2>
				</DialogTitle>
				<DialogContent>
					<DialogContentText style={{ fontSize: '1.2rem', textAlign: 'center' }}>
						The last vote resulted in a tie between {movieList && movieList.movies.length} movies. A new
						vote has been initiated to resolve the tie. Please select {voteLimit} of these movies to watch.
					</DialogContentText>
				</DialogContent>
				<DialogActions style={{ justifyContent: 'center' }}>
					<Button
						onClick={closeTiebreakerDialog}
						color="secondary"
						variant="contained"
						size="large"
						autoFocus
					>
						Continue
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
}
