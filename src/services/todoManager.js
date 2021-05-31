import config from '../core/config';
import { rndString } from '@laufire/utils/random';

const getTodo = (text) => ({
	id: rndString(config.idLength),
	text: text,
	completed: false,
});

const addTodo = (todos, text) =>
	(text === '' ? todos : todos.concat(getTodo(text)));

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

const filters = {
	all: () => true,
	active: (todo) => !todo.completed,
	completed: (todo) => todo.completed,
};
const getActiveCount = (todos) =>
	todos.filter(filters.active).length;

const getTodoCount = (todos) => todos.length;

const clearButton = (todos) => todos.filter(filters.active);

const getCompletedTodo = (todos) =>
	todos.filter((todo) => todo.completed).length;

const filterTodos = (todos, filter) =>
	todos.filter(filters[filter]);

const editingTodo = (
	todos, editing, text
) =>
	todos.map((todo) => (todo.id === editing.id
		? {
			...todo,
			text,
		}
		: todo
	));

const TodoManager = {
	addTodo,
	toggleTodo,
	removeTodo,
	toggleTodos,
	getActiveCount,
	getTodoCount,
	clearButton,
	getCompletedTodo,
	filterTodos,
	editingTodo,
};

export default TodoManager;
