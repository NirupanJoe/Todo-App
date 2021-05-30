import TodoInput from './todoInput';
import AddList from './todoList';
import ToggleAllButton from './toggleAllButton';
import ClearButton from './clearButton';
import FilterBar from './filterBar';
import ActionButton from './actionButton';

const style = {
	position: 'absolute',
	top: 0,
	left: 0,
	height: '100%',
	width: '50%',
	background: 'beige',
}

const TodoPane = () => {

	return (
		<div style={ style } className="App">
			<h3>Todo</h3>
			<div> { ToggleAllButton() }
				{ TodoInput() } { ActionButton() }
			</div>
			<div> { AddList() } </div>
			<div> { ClearButton() } </div>
			<div> { FilterBar() } </div>
		</div>
	);
};

export default TodoPane;
