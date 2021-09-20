import TaskManager from '../services/taskManager';
import TodoManager from '../services/todoManager';

const updateInput = ({ data }) => ({
	input: data,
});

const addTodo = ({ state, data }) => ({
	input: '',
	todos: TodoManager.addTodo(state.todos, data),
});

const toggleTodo = ({ state, data }) => ({
	todos: TodoManager.toggleTodo(state.todos, data),
});

const removeTodo = ({ state, data }) => ({
	todos: TodoManager.removeTodo(state.todos, data),
});

const toggleTodos = ({ state, data }) => ({
	todos: TodoManager.toggleTodos(state.todos, data),
});

const clearButton = ({ state }) => ({
	todos: TodoManager.clearButton(state.todos),
});

const filterButton = ({ data }) => ({
	filter: data,
});

const setEditing = ({ data }) => ({
	input: data.text,
	editing: data,
});

const editingTodo = ({ state }) => ({
	input: '',
	editing: null,
	todos: TodoManager.editingTodo(
		state.todos, state.editing, state.input
	),
});

const addTask = ({ state, data }) => ({
	tasks: TaskManager.addTask(state.tasks, data),
});

const removeButton = ({ state, data }) => ({
	tasks: TaskManager.removeTask(state.tasks, data),
});

const addTaskFromTodo = ({ state, data }) => ({
	todos: TodoManager.addTodo(state.todos, data.text),
});

const themeSelect = ({ data }) => ({
	theme: data,
});

const updateTodos = ({ data }) => ({
	todos: data,
});

const updateTask = ({ data }) => ({
	tasks: data,
});

const actions = {
	addTodo,
	updateInput,
	toggleTodo,
	removeTodo,
	toggleTodos,
	clearButton,
	filterButton,
	setEditing,
	editingTodo,
	addTask,
	removeButton,
	addTaskFromTodo,
	themeSelect,
	updateTodos,
	updateTask,
};

export default actions;
