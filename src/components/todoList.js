import { React } from 'react';
import context from '../core/context';
import TodoManager from '../services/todoManager';
import Todo from './todo';

const AddList = () => {
	const { todos, filter } = context.state;
	const filteredTodos = TodoManager.filterTodos(todos, filter);

	return (
		<div> { filteredTodos.map(Todo) } </div>
	);
};

export default AddList;
