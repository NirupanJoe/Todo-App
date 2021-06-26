import TodoInput from './todoInput';
import AddList from './todoList';
import ToggleAllButton from './toggleAllButton';
import ClearButton from './clearButton';
import FilterBar from './filterBar';
import ActionButton from './actionButton';
import ThemeSelect from './themeSelect';

const TodoPane = () => {

	return (
		<div className="todo-pane pane">
			<h3>Todo</h3>
			<div> { ToggleAllButton() }
				{ TodoInput() } { ActionButton() }
			</div>
			<div> { AddList() } </div>
			<div> { ClearButton() } </div>
			<div> { FilterBar() } </div>
			<div> { ThemeSelect() } </div>
		</div>
	);
};

export default TodoPane;
