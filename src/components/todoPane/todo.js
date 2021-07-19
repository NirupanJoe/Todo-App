import { React } from 'react';
import context from '../../core/context';
import { Checkbox, Grid, Box } from '@material-ui/core';
import ClearIcon from '@material-ui/icons/Clear';

const ToggleButton = (todo, completed) =>
	<Checkbox
		className="todo-checkbox"
		checked={ completed }
		onChange={ () => context.actions.toggleTodo(todo) }
	/>;

const RemoveButton = (todo) =>
	<button
		className="btn-x"
		onClick={ () => context.actions.removeTodo(todo) }
	>
		<ClearIcon/>
	</button>;

const TextInput = (text, todo) =>
	<Box
		component="span"
		onClick={ () => context.actions.setEditing(todo) }
	>{text}</Box>;

const GridItem = (Component) =>
	<Grid item={ true } xs={ 3 }>{ Component }</Grid>;

const Todo = (todo) => {
	const { id, text, completed } = todo;
	const className = ` ${ completed ? 'todo-completed' : 'todo-active' }`;
	const components = [
		ToggleButton(todo, completed),
		TextInput(text, todo),
		RemoveButton(todo),
	];

	return (
		<Grid
			key={ id }
			container={ true }
			direction="row"
			justifyContent="center"
			alignItems="center"
			className={ className }
		>
			{ components.map(GridItem)}
		</Grid>);
};

export default Todo;
