import { React } from 'react';
import context from '../../core/context';
import TodoManager from '../../services/todoManager';

const ToggleAllButton = () => {
	const isChecked = TodoManager.getActiveCount(context.state.todos) === 0;
	const noTodos = TodoManager.getTodoCount(context.state.todos) === 0;

	return noTodos
		? null
		: <span>
			<input
				type="checkbox"
				checked={ isChecked }
				onChange={ () => context.actions.toggleTodos(!isChecked) }
			/>
		</span>;
};

export default ToggleAllButton;
