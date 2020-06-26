import { makeStyles } from '@material-ui/core/styles';
export default makeStyles((theme) => ({
	root: (props) => ({
		width: '300px',
		display: 'flex',
		flexDirection: 'column',
		position: 'relative',
		transition: 'all 0.2s ease-in-out',
		marginLeft: 'auto',
		marginRight: 'auto',
		borderRadius: '1rem',
		backgroundColor: theme.darkMode ? '#333333' : '#FFFFFF',
		'&:hover&:not($selected)&:not($disabled)& $selectedIcon': {
			'@media(pointer: fine)': {
				opacity: props.toggleAble ? 0.5 : 0
			}
		}
	}),
	gridItem: {
		display: 'flex',
		boxSizing: 'content-box',
		margin: '2rem'
	},
	poster: (props) => ({
		width: '300px',
		height: '450px',
		objectFit: 'cover',
		backgroundImage: `url(https://image.tmdb.org/t/p/w300${props.movie.poster_path})`
	}),
	cardContent: {
		padding: '1rem !important',
		backgroundColor: theme.palette.background.secondary,
		color: theme.palette.text.primary,
		display: 'flex',
		flexDirection: 'column',
		flexGrow: 1
	},
	title: {
		marginBottom: 'auto',
		lineHeight: '1.5rem',
		paddingBottom: '1rem',
		display: 'flex',
		alignItems: 'flex-start',
		justifyContent: 'space-between',
		width: '100%'
	},
	icon: {
		width: '30px',
		height: '30px'
	},

	selected: (props) => ({
		boxShadow: '0px 0px 0px 5px rgba(76,175,80,1)',
		'& $selectedIcon': {
			opacity: 1
		}
	}),

	[theme.breakpoints.down('sm')]: {
		gridItem: {
			margin: '1rem'
		},
		root: (props) => ({
			width: '150px',
			maxWidth: '150px',
			borderRadius: '0.5rem'
		}),
		poster: (props) => ({
			width: '150px',
			height: '225px',
			backgroundImage: `url(https://image.tmdb.org/t/p/w154${props.movie.poster_path})`
		}),
		cardContent: {
			padding: '0.5rem !important',
			justifyContent: 'center'
		},
		title: {
			padding: 0,
			flexDirection: 'row-reverse',
			marginBottom: 0,
			'& h2': {
				display: 'none'
			}
		},
		icon: {
			position: 'absolute',
			right: '0px',
			top: '-45px',
			backgroundColor: 'white',
			borderRadius: '50%',
			color: 'grey',
			opacity: 0.5
		}
	},

	[theme.breakpoints.down('xs')]: {
		gridItem: {
			margin: '0.5rem 0.2rem'
		},
		selected: (props) => ({
			boxShadow: '0px 0px 0px 2px rgba(76,175,80,1)',
			'& $selectedIcon': {
				opacity: 1
			}
		})
	},

	infoButton: {
		padding: 0
	},

	selectedIcon: (props) => ({
		position: 'absolute',
		top: 10,
		right: 10,
		color: '#4caf50',
		backgroundColor: 'white',
		borderRadius: '50%',
		opacity: 0,
		transition: 'all 0.2s ease-in-out'
	}),
	disabled: (props) => ({
		opacity: 0.5
	})
}));
