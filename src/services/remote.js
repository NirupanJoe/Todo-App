import axios from 'axios';
import context from '../core/context';

const Remote = {

	fetchTodos: async () => {
		const result = await axios.get('http://localhost:3500/todo');

		context.actions.updateTodos(result.data);
	},
};

export default Remote;
