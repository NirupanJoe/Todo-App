import TodoManager from '../services/todoManager';

const increaseCount = ({ state }) => ({
	count: state.count + 1,
});

const updateInput = (dummy, evt) => ({
	input: evt.target.value,
});

const updateColor = (dummy, color) => ({
	color,
});

const addTodo = ({ state }) => ({
	todos: TodoManager.addTodo(state.todos, state.input),
});

const toggleTodo = ({ state }, todo) => ({
	todos: TodoManager.toggleTodo(state.todos, todo),
});

const removeTodo = ({ state }, todo) => ({
	todos: TodoManager.removeTodo(state.todos, todo),
});

const actions = {
	addTodo,
	increaseCount,
	updateInput,
	updateColor,
	toggleTodo,
	removeTodo,
};

export default actions;
