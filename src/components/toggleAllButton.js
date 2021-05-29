/* eslint-disable react/jsx-indent-props */
import { React } from 'react';
import context from '../core/context';
import TodoManager from '../services/todoManager';

const ToggleAllButton = () => {
	const isChecked = TodoManager.getActiveCount(context.state.todos) === 0;
	const noTodos = TodoManager.getCompletedTodo(context.state.todos) === 0;

	return noTodos
		? null
		: <input
			type="checkbox"
			checked={ isChecked }
			onChange={ () => context.actions.toggleTodos(!isChecked) }
			// eslint-disable-next-line no-mixed-spaces-and-tabs
		  />;
};

export default ToggleAllButton;
