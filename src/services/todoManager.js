import config from '../core/config';
import { rndString } from '@laufire/utils/random';

const getTodo = (text) => ({
	id: rndString(config.idLength),
	text: text,
	completed: false,
});

const addTodo = (todos, text) => todos.concat(getTodo(text));

const toggleTodo = (todos, data) => todos.map((todo) => (todo.id !== data.id
	? todo
	: {
		...todo,
		completed: !data.completed,
	}
));

const removeTodo = (todos, data) =>
	todos.filter((todo) => todo.id !== data.id);

const toggleTodos = (todos, isChecked) =>
	todos.map((todo) => ({
		...todo,
		completed: isChecked,
	}));

const getActiveCount = (todos) =>
	todos.filter((todo) => !todo.completed).length;

const getTodoCount = (todos) => todos.length;

const clearButton = (todos) => todos.filter((todo) => !todo.completed);

const getCompletedTodo = (todos) =>
	todos.filter((todo) => todo.completed).length;

const TodoManager = {
	addTodo,
	toggleTodo,
	removeTodo,
	toggleTodos,
	getActiveCount,
	getTodoCount,
	clearButton,
	getCompletedTodo,
};

export default TodoManager;
