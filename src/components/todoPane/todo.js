/* eslint-disable max-len */
import { React } from 'react';
import context from '../../core/context';
import { Checkbox, Grid } from '@material-ui/core';
import ClearIcon from '@material-ui/icons/Clear';

const toggleButton = (todo) =>
	<Checkbox
		className="todo-checkbox"
		checked={ todo.completed }
		onChange={ () => context.actions.toggleTodo(todo) }
	/>;

const removeButton = (todo) =>
	<button
		className="btn-x"
		onClick={ () => context.actions.removeTodo(todo) }
	>
		<ClearIcon/>
	</button>;

const Todo = (todo) => {
	const { id, text, completed } = todo;
	const className = ` ${ completed ? 'todo-completed' : 'todo-active' }`;

	return (
		<Grid
			key={ id }
			container="container"
			direction="row"
			justify="center"
			alignItems="center"
			className={ className }
		>
			<Grid item="item" xs={ 3 }>{ toggleButton(todo) }</Grid>
			<Grid item="item" xs={ 3 } onClick={ () => context.actions.setEditing(todo) }>
				{ text }</Grid>
			<Grid item="item" xs={ 3 }>{ removeButton(todo) }</Grid>
		</Grid>
	);
};

export default Todo;
