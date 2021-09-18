import { React } from 'react';
import context from '../../core/context';
import { Checkbox, Grid, Box } from '@material-ui/core';
import ClearIcon from '@material-ui/icons/Clear';
import Remote from '../../services/remote';

const ToggleButton = (todo) => {
	const { id, completed } = todo;

	return (
		<Checkbox
			key={ id }
			className="todo-checkbox"
			checked={ completed }
			onChange={ () => context.actions.toggleTodo(todo) }
		/>);
};

const RemoveButton = (todo) => {
	const { id } = todo;

	return (
		<button
			key={ id }

			className="btn-x"
			onClick={ () => Remote.removeTodo(todo) }
		>
			<ClearIcon/>
		</button>);
};

const TextInput = (todo) => {
	const { id, text } = todo;

	return (
		<Box
			key={ id }
			component="span"
			onClick={ () => context.actions.setEditing(todo) }
		>{text}</Box>);
};

const GridItem = (Component, key) =>
	<Grid key={ key } item={ true } xs={ 3 }>{ Component }</Grid>;

const Todo = (todo) => {
	const { id, completed } = todo;
	const className = ` ${ completed ? 'todo-completed' : 'todo-active' }`;
	const components = [
		ToggleButton(todo),
		TextInput(todo),
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
			{ components.map((component, key) => GridItem(component, key))}
		</Grid>);
};

export default Todo;
