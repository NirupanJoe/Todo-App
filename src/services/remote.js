import axios from 'axios';
import context from '../core/context';

const Remote = {

	fetchTodos: async () => {
		const result = await axios.get('http://localhost:3500/todo');

		context.actions.updateTodos(result.data);
	},

	createTodo: async ({ input }) => {
		const result = input !== '' && await axios
			.post('http://localhost:3500/todo', {
				text: input,
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

		context.actions.updateTask(result.data.task);
	},
};

export default Remote;
