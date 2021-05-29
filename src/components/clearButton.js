/* eslint-disable react/jsx-indent-props */
/* eslint-disable no-mixed-spaces-and-tabs */
import { React } from 'react';
import context from '../core/context';
import TodoManager from '../services/todoManager';

const ClearButton = () => {
	const noCompletedTodo = TodoManager.getTodoCount(context.state.todos)
	=== 0;

	return noCompletedTodo
		? null
		: <button
			onClick={ context.actions.clearButton }
		  >
			ClearButton
		</button>;
};

export default ClearButton;
