import { React, useEffect } from 'react';
import './App.css';
import TaskManager from './services/taskManager';
import TodoPane from './components/todoPane';
import context from './core/context';
import TaskPane from './components/taskPane';
import ticker from './services/ticker';
import { Box, Grid, Paper, ThemeProvider } from '@material-ui/core';
import darkTheme from './components/darkTheme';
import lightTheme from './components/lightTheme';
import Remote from './services/remote';

const theme = () =>
	(context.state.theme === 'dark' ? darkTheme : lightTheme);

const App = () => {
	useEffect(TaskManager.init, []);
	useEffect(ticker.state, []);
	useEffect(Remote.fetchTodos, []);

	return (
		<Box className={ `App ${ context.state.theme }` }>
			<ThemeProvider theme={ theme() }>
				<Paper>
					<Grid container={ true }>
						<Grid item={ true } xs={ 6 }>{ TodoPane() }</Grid>
						<Grid item={ true } xs={ 6 }>{ TaskPane() }</Grid>
					</Grid>
				</Paper>
			</ThemeProvider>
		</Box>
	);
};

export default App;
