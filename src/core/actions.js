import TaskManager from '../services/taskManager';
import TodoManager from '../services/todoManager';

const increaseCount = ({ state }) => ({
	count: state.count + 1,
});

const updateInput = ({ data }) => ({
	input: data,
});

const updateColor = ({ data }) => ({
	color: data,
});

const addTodo = ({ state }) => ({
	input: '',
	todos: TodoManager.addTodo(state.todos, state.input),
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

const actions = {
	addTodo,
	increaseCount,
	updateInput,
	updateColor,
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
};

export default actions;
