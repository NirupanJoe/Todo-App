import { React, useEffect } from 'react';
import './App.css';
import TaskManager from './services/taskManager';
import TodoPane from './components/todoPane';
import context from './core/context';
import TaskPane from './components/taskPane';

const App = () => {
	useEffect(TaskManager.init, []);

	// eslint-disable-next-line no-console
	console.log(context.state);
	return (
		<div className="App">
			<div> { TodoPane() } { TaskPane() } </div>
		</div>
	);
};

export default App;
