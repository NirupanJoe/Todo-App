import { React, useEffect } from 'react';
import './App.css';
import TaskManager from './services/taskManager';
import TodoPane from './components/todoPane';
import context from './core/context';
import TaskPane from './components/taskPane';
import ticker from './services/ticker';
import { Grid, ThemeProvider } from '@material-ui/core';
import darkTheme from './components/darkTheme';
import lightTheme from './components/lightTheme';

const theme = () =>
	(context.state.theme === 'dark' ? darkTheme : lightTheme);

const App = () => {
	useEffect(TaskManager.init, []);
	useEffect(ticker.state, []);

	return (
		<div className={ `App ${ context.state.theme }` }>
			<ThemeProvider theme={ theme() }>
				<Grid container="true">
					{ TodoPane() } { TaskPane() } </Grid>
			</ThemeProvider>
		</div>
	);
};

export default App;
