import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import MovieApp from './MovieApp';
import { lightTheme, darkTheme } from './styles/themes';
import { CustomThemeProvider } from './contexts/CustomThemeContext';
import './styles/App.css';

export default function App() {
	return (
		<div className="App">
			<CustomThemeProvider>
				<MovieApp />
			</CustomThemeProvider>
		</div>
	);
}