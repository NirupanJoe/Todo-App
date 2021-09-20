import { React } from 'react';
import context from '../../core/context';
import { Fab, Grid } from '@material-ui/core';
import { Add, Clear } from '@material-ui/icons';
import Remote from '../../services/remote';

const RemoveButton = (task) =>
	<Fab
		size="small"
		color="secondary"
		onClick={ () => Remote.removeTask(task) }
	>
		<Clear/>
	</Fab>;

const AddButton = (task) =>
	<Fab
		size="small"
		color="primary"
		onClick={ () => {
			Remote.removeTask(task);
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
			container={ true }
			justifyContent="center"
			alignItems="center"
		>
			<Grid item={ true } xs={ 2 }> { AddButton(task)} </Grid>
			<Grid item={ true } xs={ 2 }> { RemoveButton(task) } </Grid>
			<Grid item={ true } xs={ 5 }>{ text }</Grid>
		</Grid>
	);
};

export default Task;
