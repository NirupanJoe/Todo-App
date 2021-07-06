import { React } from 'react';
import context from '../../core/context';
import Checkbox from '@material-ui/core/Checkbox';

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
		X
	</button>;

const Todo = (todo) => {
	const { id, text, completed } = todo;
	const className = `todo ${ completed ? 'todo-completed' : 'todo-active' }`;

	return (
		<div key={ id } className={ className }>
			<span>{ toggleButton(todo) }</span>
			<span
				onClick={ () => context.actions.setEditing(todo) }
			>
				{ text }</span>
			<span>{ removeButton(todo) }</span>
		</div>
	);
};

export default Todo;
