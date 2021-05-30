import { React } from 'react';
import context from '../../core/context';

const removeButton = (task) =>
	<button
		onClick={ () => context.actions.removeButton(task) }
	>
		X
	</button>;

const addButton = (task) =>
	<button
		onClick={ () => {
			context.actions.removeButton(task);
			context.actions.addTaskFromTodo(task);
		} }
	>
		+
	</button>;

const Task = (task) => {
	const { id, text } = task;

	return <div key={ id }>
		<span>{ text }</span>
		<span> { addButton(task)} </span>
		<span> { removeButton(task) } </span>
	</div>;
};

export default Task;
