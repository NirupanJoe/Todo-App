import { React } from 'react';
import context from '../../core/context';
import TodoManager from '../../services/todoManager';

const ClearButton = () => {
	const noCompletedTodo = TodoManager.getCompletedTodo(context.state.todos)
	=== 0;

	return noCompletedTodo
		? null
		: <span>
			<button
				className="btn"
				onClick={ context.actions.clearButton }
			>
				ClearButton
			</button>
		</span>;
};

export default ClearButton;
