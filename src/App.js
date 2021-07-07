import { React, useEffect } from 'react';
import './App.css';
import TaskManager from './services/taskManager';
import TodoPane from './components/todoPane';
import context from './core/context';
import TaskPane from './components/taskPane';
import ticker from './services/ticker';
import { Grid } from '@material-ui/core';

const App = () => {
	useEffect(TaskManager.init, []);
	useEffect(ticker.state, []);

	// eslint-disable-next-line no-console
	console.log(context.state);
	return (
		<div className={ `App ${ context.state.theme }` }>
			<Grid container="true">
				{ TodoPane() } { TaskPane() } </Grid>
		</div>
	);
};

export default App;
