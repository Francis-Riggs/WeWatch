import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useTheme } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { CustomThemeContext } from './contexts/CustomThemeContext';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1
	},
	AppBar: {
		backgroundColor: theme.palette.background.nav
	},
	menuButton: {
		marginRight: theme.spacing(2)
	},
	title: {
		flexGrow: 1
	}
}));

export default function Navbar() {
	const theme = useTheme();
	const classes = useStyles(theme);
	const { isDarkMode, toggleTheme } = useContext(CustomThemeContext);

	return (
		<div className={classes.root}>
			<AppBar className={classes.AppBar} position="static">
				<Toolbar>
					<IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
						<MenuIcon />
					</IconButton>
					<Typography variant="h6" className={classes.title}>
						Movie App
					</Typography>
					<Switch checked={isDarkMode} onChange={toggleTheme} />
				</Toolbar>
			</AppBar>
		</div>
	);
}
