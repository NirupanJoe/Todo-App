import TodoInput from './todoInput';
import AddList from './todoList';
import ToggleAllButton from './toggleAllButton';
import ClearButton from './clearButton';
import FilterBar from './filterBar';
import ActionButton from './actionButton';
import ThemeSelect from './themeSelect';
import { Grid } from '@material-ui/core';

const TodoPane = () => {

	return (
		<Grid item="true" xs={ 6 } className="pane todo-pane">
			<h3>Todo</h3>
			<Grid container="true" justify="center" alignItems="flex-end"> { ToggleAllButton() }
				{ TodoInput() } { ActionButton() }
			</Grid>
			<div> { AddList() } </div>
			<div> { ClearButton() } </div>
			<div> { FilterBar() } </div>
			<div> { ThemeSelect() } </div>
		</Grid>
	);
};

export default TodoPane;
