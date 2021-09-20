import axios from 'axios';
import context from '../core/context';

const Remote = {

	fetchTodos: async () => {
		const result = await axios.get('http://localhost:3500/todo');

		context.actions.updateTodos(result.data);
	},

	createTodo: async (text) => {
		const result = text !== '' && await axios
			.post('http://localhost:3500/todo', {
				text: text,
				completed: false,
			});

		context.actions.addTodo(result.data);
	},

	removeTodo: async (todo) => {
		await axios.delete(`http://localhost:3500/todo/${ todo.id }`);

		context.actions.removeTodo(todo);
	},

	editingTodo: async ({ input, editing }) => {
		await axios.put(`http://localhost:3500/todo/${ editing.id }`, {
			text: input,
		});

		context.actions.editingTodo();
	},

	toggleTodo: async (todo) => {
		await axios.put(`http://localhost:3500/todo/${ todo.id }`, {
			completed: !todo.completed,
		});

		context.actions.toggleTodo(todo);
	},

	fetchTasks: async () => {
		const result = await axios.get('http://localhost:3500/task');

		context.actions.updateTask(result.data);
	},

	createTask: async (text) => {
		const result = await axios.post('http://localhost:3500/task', {
			text,
		});

		context.actions.addTask(result.data);
	},

	removeTask: async (task) => {
		await axios.delete(`http://localhost:3500/task/${ task.id }`);

		context.actions.removeTask(task);
	},
};

export default Remote;
