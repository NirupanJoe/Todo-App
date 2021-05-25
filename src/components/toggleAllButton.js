import { React } from 'react';
import context from '../core/context';

const getTodos = (todos) => todos.filter((todo) => !todo.completed).length;

const ToggleAllButton = () => {
	const isChecked = getTodos(context.state.todos) === 0;

	return (
		<input
			type="checkbox"
			checked={ isChecked }
			onChange={ () => context.actions.toggleTodos(!isChecked) }
		/>
	);
};

export default ToggleAllButton;
