import { React } from 'react';
import context from '../core/context';

const sharedStyle = {
	height: '1em',
};

const completedStyle = {
	...sharedStyle,
	color: 'gray',
};

const activeStyle = {
	...sharedStyle,
	color: 'black',
};

const Todo = (todo) => {
	const { id, text, completed } = todo;
	const style = completed ? completedStyle : activeStyle ;

	return (
		<div key={ id } style={ style }>
			<input
				type="checkbox"
				defaultChecked={ completed }
				onChange={ () => context.actions.toggleTodo(todo) }
			/>
			<span>{ text }</span>
		</div>
	);
};

export default Todo;
