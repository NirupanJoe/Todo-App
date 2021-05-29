import { React } from 'react';
import './App.css';
import context from './core/context';
import TodoInput from './components/todoInput';
import AddList from './components/todoList';
import ToggleAllButton from './components/toggleAllButton';
import ClearButton from './components/clearButton';
import FilterBar from './components/filterBar';
import ActionButton from './components/actionButton';

const App = () => {
	// eslint-disable-next-line no-console
	console.log(context.state);
	return (
		<div style={ { background: context.state.color } } className="App">
			<div> { ToggleAllButton() }
				{ TodoInput() } { ActionButton() }
			</div>
			<div> { AddList() } </div>
			<div> { ClearButton() } </div>
			<div> { FilterBar() } </div>
			<div>Refresh ID: { context.state.refreshID }</div>
		</div>
	);
};

export default App;
