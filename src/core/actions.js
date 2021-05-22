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

const addButton = ({ state }) => ({
	todos: TodoManager.addTodo(state.todos, state.input),
});

const actions = {
	addButton,
	increaseCount,
	updateInput,
	updateColor,
};

export default actions;
