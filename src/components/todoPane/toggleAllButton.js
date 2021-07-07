import { React } from 'react';
import context from '../../core/context';
import TodoManager from '../../services/todoManager';
import { Checkbox, Grid } from '@material-ui/core';

const ToggleAllButton = () => {
	const isChecked = TodoManager.getActiveCount(context.state.todos) === 0;
	const noTodos = TodoManager.getTodoCount(context.state.todos) === 0;

	return noTodos
		? null
		: <Grid item="true" xs={ 2 }>
			<Checkbox
				checked={ isChecked }
				onChange={ () => context.actions.toggleTodos(!isChecked) }
			/>
		</Grid>;
};

export default ToggleAllButton;
