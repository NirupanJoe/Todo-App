import { React } from 'react';
import context from '../../core/context';
import { Fab, Grid } from '@material-ui/core';
import { Add, Clear } from '@material-ui/icons';

const removeButton = (task) =>
	<Fab
		color="secondary"
		onClick={ () => context.actions.removeButton(task) }
	>
		<Clear/>
	</Fab>;

const addButton = (task) =>
	<Fab
		color="primary"
		onClick={ () => {
			context.actions.removeButton(task);
			context.actions.addTaskFromTodo(task);
		} }
	>
		<Add/>
	</Fab>;

const Task = (task) => {
	const { id, text } = task;

	return (
		<Grid
			key={ id }
			container="true"
			justify="center"
			alignItems="center"
		>
			<Grid item="true" xs={ 2 }> { addButton(task)} </Grid>
			<Grid item="true" xs={ 2 }> { removeButton(task) } </Grid>
			<Grid item="true" xs={ 5 }>{ text }</Grid>
		</Grid>
	);
};

export default Task;
