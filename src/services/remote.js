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
};

export default Remote;
